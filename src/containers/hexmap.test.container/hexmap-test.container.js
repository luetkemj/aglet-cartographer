import React, { Component } from 'react';
import _ from 'lodash';
import { Checkbox, NumberInput } from '@aglet/components';

import HexmapD3 from '../../components/hexmap-d3/hexmap-d3.component';

import {
  generateHexmap,
  hexHeight,
  hexWidth,
} from '../../index.prod';

export default class HexmapTestContainer extends Component {
  state = {
    world: null,
    scrollPos: {
      x: 0,
      y: 0,
    },
  }

  componentWillMount() {
    this.buildMapData();
  }

  desert = 10;
  forest = 10;
  hills = 10;
  mountains = 10;
  plains = 10;
  swamp = 10;
  water = 2;
  hasOcean = true;
  kingdomsCount = 3;

  width = 50;
  height = 50;

  buildMapData() {
    const config = {
      map: {
        width: this.width,
        height: this.height,
        hexSize: 20,
        seedChance: 10,
        seedChanceRatios: [
          { desert: this.desert },
          { forest: this.forest },
          { hills: this.hills },
          { mountains: this.mountains },
          { plains: this.plains },
          { swamp: this.swamp },
          { ocean: this.water },
        ],
      },
    };

    this.data = generateHexmap({
      gridColumns: config.map.width,
      gridRows: config.map.height,
      hexSize: config.map.hexSize,
      seedChance: config.map.seedChance,
      seedChanceRatios: config.map.seedChanceRatios,
      hasOcean: this.hasOcean,
      kingdomsCount: this.kingdomsCount,
    });

    this.world = {};
    this.world.data = this.data.hexes;
    this.world.width = ((hexWidth(config.map.hexSize) * 0.75) * config.map.width) / 2;
    this.world.height = hexHeight(config.map.hexSize) * config.map.height;

    this.setState({
      world: this.world,
    });
  }

  showPopulationDensity() {
    const newData = this.state.world;
    _.each(newData.data, (hex) => {
      _.merge(hex, {
        textures: [],
      });
    });

    this.setState({
      world: newData,
    });
  }

  showTerrain() {
    const newData = this.state.world;
    _.each(newData.data, (hex) => {
      _.merge(hex, {
        textures: [],
      });
    });

    this.setState({
      world: newData,
    });
  }

  handleCheck(val, name) {
    this[name] = val;
  }

  handleChangeNumber(val, name) {
    if (val < 0) {
      this[name] = 0;
    } else {
      this[name] = Number(val);
    }
  }

  render() {
    if (this.world) {
      return (
        <div>
          <div
            ref={ref => this.myRef = ref} // eslint-disable-line no-return-assign
            onScroll={() => this.setState({
              scrollPos: { x: this.myRef.scrollLeft, y: this.myRef.scrollTop },
            })}
            style={{
              width: 200,
              height: 200,
              overflow: 'scroll',
              border: '1px solid black',
            }}
          >
            <HexmapD3
              world={this.state.world}
              columns={this.width}
              rows={this.height}
              size={20}
              scrollPos={this.state.scrollPos}
            />
          </div>
          Terrain Ratios
          <div>
            <NumberInput
              name="forest"
              label="Forest"
              onChange={val => this.handleChangeNumber(val, 'forest')}
              initialValue={this.forest}
            />
            <NumberInput
              name="desert"
              label="Desert"
              onChange={val => this.handleChangeNumber(val, 'desert')}
              initialValue={this.desert}
            />
            <NumberInput
              name="hills"
              label="Hills"
              onChange={val => this.handleChangeNumber(val, 'hills')}
              initialValue={this.hills}
            />
            <NumberInput
              name="mountains"
              label="Mountains"
              onChange={val => this.handleChangeNumber(val, 'mountains')}
              initialValue={this.mountains}
            />
            <NumberInput
              name="plains"
              label="Plains"
              onChange={val => this.handleChangeNumber(val, 'plains')}
              initialValue={this.plains}
            />
            <NumberInput
              name="swamp"
              label="Swamp"
              onChange={val => this.handleChangeNumber(val, 'swamp')}
              initialValue={this.swamp}
            />
            <NumberInput
              name="water"
              label="Water"
              onChange={val => this.handleChangeNumber(val, 'water')}
              initialValue={this.water}
            />

            <Checkbox
              name="hasOcean"
              label="Oceans"
              onChange={val => this.handleCheck(val, 'hasOcean')}
              defaultChecked={this.hasOcean}
            />
            <NumberInput
              name="kingdomsCount"
              label="Number of Kingdoms"
              onChange={val => this.handleChangeNumber(val, 'kingdomsCount')}
              initialValue={this.kingdomsCount}
            />
          </div>
          <div>
            <button onClick={() => this.showPopulationDensity()}>Population Density</button>
            <button onClick={() => this.showTerrain()}>Terrain</button>
            <button onClick={() => this.buildMapData()}>Generate New Map</button>
          </div>
        </div>
      );
    }

    return (
      <div>Loading</div>
    );
  }
}
