import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HexMap from './HexMap';
import {
  generateHexmap,
  hexHeight,
  hexWidth,
} from '../index.prod';

import style from './hexmap.component.scss';

export default class Hexmap extends Component {
  componentWillMount() {
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
    // this.world.width = ((hexWidth(hexSize) * (width) * 0.75) / 2) - (width * 4);
    this.world.width = ((hexWidth(hexSize) * 0.75) * width) / 2;
    this.world.height = hexHeight(hexSize) * height;
  }

  componentDidMount() {
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
