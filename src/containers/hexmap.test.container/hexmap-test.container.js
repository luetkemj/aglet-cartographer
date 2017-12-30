import React, { Component } from 'react';
import _ from 'lodash';

import { loadTextures, colors, constructedLocations } from '../../textures/terrains.textures';
import Hexmap from '../../components/hexmap/hexmap.component';
import {
  generateHexmap,
  hexHeight,
  hexWidth,
} from '../../index.prod';

export default class HexmapTestContainer extends Component {
  state = {
    world: null,
  }

  componentWillMount() {
    loadTextures(this.buildMapData.bind(this));
  }

  buildMapData() {
    const config = {
      map: {
        width: 32,
        height: 16,
        hexSize: 20,
        seedChance: 15,
        seedChanceRatios: [
          { coast: 0 },
          { desert: 2 },
          { forest: 2 },
          { hills: 2 },
          { mountains: 2 },
          { plains: 2 },
          { swamp: 2 },
          { lake: 0 },
          { ocean: 1 },
        ],
      },
    };

    this.data = generateHexmap({
      gridColumns: config.map.width,
      gridRows: config.map.height,
      hexSize: config.map.hexSize,
      seedChance: config.map.seedChance,
      seedChanceRatios: config.map.seedChanceRatios,
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
        textures: [
          colors.textures[hex.populationDensity],
        ],
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
        textures: [
          colors.textures[hex.terrain],
        ],
      });
    });

    this.setState({
      world: newData,
    });
  }

  render() {
    if (this.world) {
      return (
        <div>
          <p>Display:</p>
          <button onClick={() => this.showPopulationDensity()}>Population Density</button>
          <button onClick={() => this.showTerrain()}>Terrain</button>
          <button onClick={() => this.buildMapData()}>Generate New Map</button>
          <Hexmap data={this.state.world} />
        </div>
      );
    }

    return (
      <div>Loading</div>
    );
  }
}
