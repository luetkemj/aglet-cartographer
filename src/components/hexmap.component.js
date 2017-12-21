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
    this.data = generateHexmap({
      gridColumns: this.props.config.map.width,
      gridRows: this.props.config.map.height,
      hexSize: this.props.config.map.hexSize,
      seedChance: this.props.config.map.seedChance,
      seedChanceRatios: this.props.config.map.seedChanceRatios,
    });

    this.world = {};
    this.world.data = this.data.hexes;
    this.world.width =
      ((hexWidth(this.props.config.map.hexSize) * this.props.config.map.height) / 2) + 40;
    this.world.height = hexHeight(this.props.config.map.hexSize) * this.props.config.map.height;
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
