import React, { Component } from 'react';
import { Checkbox, NumberInput } from '@aglet/components';

import { loadTextures } from '../../textures/terrains.textures';
import Hexmap from '../../components/hexmap/hexmap.component';
import {
  generateHexmap,
  hexHeight,
  hexWidth,
} from '../../index.prod';

import style from './hexmap-test.container.scss';

export default class HexmapTestContainer extends Component {
  componentWillMount() {
    loadTextures(this.buildMapData.bind(this));
  }

  desert = 1;
  forest = 1;
  hills = 1;
  mountains = 1;
  plains = 1;
  swamp = 1;
  water = 1;
  hasOcean = true;
  kingdomsCount = 3;
  seedChance = 15;

  buildMapData() {
    const config = {
      map: {
        width: 32,
        height: 16,
        hexSize: 20,
        seedChance: this.seedChance,
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

    this.forceUpdate();
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
          Terrain Ratios
          <div className={style.settings}>
            <div className={style.numberField}>
              <NumberInput
                name="forest"
                label="Forest"
                onChange={val => this.handleChangeNumber(val, 'forest')}
                initialValue={this.forest}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="desert"
                label="Desert"
                onChange={val => this.handleChangeNumber(val, 'desert')}
                initialValue={this.desert}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="hills"
                label="Hills"
                onChange={val => this.handleChangeNumber(val, 'hills')}
                initialValue={this.hills}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="mountains"
                label="Mountains"
                onChange={val => this.handleChangeNumber(val, 'mountains')}
                initialValue={this.mountains}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="plains"
                label="Plains"
                onChange={val => this.handleChangeNumber(val, 'plains')}
                initialValue={this.plains}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="swamp"
                label="Swamp"
                onChange={val => this.handleChangeNumber(val, 'swamp')}
                initialValue={this.swamp}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="water"
                label="Water"
                onChange={val => this.handleChangeNumber(val, 'water')}
                initialValue={this.water}
              />
            </div>

            <div className={style.numberField}>
              <NumberInput
                name="seedChance"
                label="Seed Chance"
                onChange={val => this.handleChangeNumber(val, 'seedChance')}
                initialValue={this.seedChance}
              />
            </div>

            <div className={style.checkbox}>
              <Checkbox
                name="hasOcean"
                label="Oceans"
                onChange={val => this.handleCheck(val, 'hasOcean')}
                defaultChecked={this.hasOcean}
              />
            </div>
            <div className={style.numberField}>
              <NumberInput
                name="kingdomsCount"
                label="Kingdoms"
                onChange={val => this.handleChangeNumber(val, 'kingdomsCount')}
                initialValue={this.kingdomsCount}
              />
            </div>
          </div>
          <div>
            <button
              className={style.button}
              onClick={() => this.buildMapData()}
            >Generate New Map
            </button>
          </div>
          <Hexmap data={this.world} />
        </div>
      );
    }

    return (
      <div>Loading</div>
    );
  }
}
