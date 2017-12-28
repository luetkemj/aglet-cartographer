import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { loadTextures } from '../textures/terrains.textures';
import HexMap from './HexMap';
import {
  generateHexmap,
  hexHeight,
  hexWidth,
} from '../index.prod';

import style from './hexmap.component.scss';

export default class Hexmap extends Component {
  componentWillMount() {
    loadTextures(this.buildMapData.bind(this));
  }

  buildMapData() {
    const {
      width,
      height,
      hexSize,
      seedChance,
      seedChanceRatios,
    } = this.props.config.map;

    this.data = generateHexmap({
      gridColumns: width,
      gridRows: height,
      hexSize,
      seedChance,
      seedChanceRatios,
    });

    this.world = {};
    this.world.data = this.data.hexes;
    this.world.width = ((hexWidth(hexSize) * 0.75) * width) / 2;
    this.world.height = hexHeight(hexSize) * height;

    this.pixiApp = new HexMap({
      showTerrainKeys: false,
      showSeeds: false,
      showBoundaries: false,
    }, this.world);

    this.canvas.appendChild(this.pixiApp.view);
  }

  render() {
    return (
      <div
        className={style.hexmap}
        ref={(elem) => { this.canvas = elem; }}
      />
    );
  }
}

Hexmap.propTypes = {
  config: PropTypes.shape({
    map: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      hexSize: PropTypes.number,
      seedChance: PropTypes.number,
      seedChanceRatios: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};
