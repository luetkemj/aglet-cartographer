import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import hexHeight from '../../lib/hex-height';
import hexPoints from '../../lib/hex-points';
import hexToPixel from '../../lib/hex-to-pixel';
import hexWidth from '../../lib/hex-width';
import idToHex from '../../lib/id-to-hex';
import { hexRectangle } from '../../index.prod';

import style from './hexmap-d3.component.scss';

export default class Hexmap extends Component {
  componentDidMount() {
    this.svg = d3
      .select(this.myRef)
      .append('svg')
      .attr('class', 'svg')
      .attr('width', ((hexWidth(this.props.size) * (this.props.columns + 0.35)) * 0.75))
      .attr('height', (hexHeight(this.props.size) * this.props.rows) + (hexHeight(this.props.size) / 2))
      .append('g')
      .attr('transform', `translate(${this.props.size}, ${hexHeight(this.props.size) / 2})`);

    this.update();
  }

  terrainColor = (color) => {
    const colors = {
      coast: '#fffcce',
      desert: '#fff993',
      forest: '#79ae3b',
      hills: '#e8cf4f',
      mountains: '#b38100',
      plains: '#d3e38a',
      swamp: '#acdfa3',
      lake: '#00659b',
      ocean: '#00659b',
    };
    return colors[color];
  }

  worldView = hex => hexRectangle(10, 10, hex);

  update = () => {
    const selection =
    this.svg.selectAll('rect').data(this.worldView({ x: 0, y: 0, z: 0 }));
    // const selection = this.svg.selectAll('rect').data(Object.keys(this.props.world.data));
    selection.enter()
      .append('polygon')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('fill', d => this.terrainColor(this.props.world.data[d].terrain))
      .attr('points', d => hexPoints(hexToPixel(idToHex(d), this.props.size), this.props.size));
    selection.exit().remove();
  }

  render() {
    return (
      <div
        ref={myRef => this.myRef = myRef} // eslint-disable-line no-return-assign
        className={style.hexmap}
      />
    );
  }
}

Hexmap.propTypes = {
  world: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};
