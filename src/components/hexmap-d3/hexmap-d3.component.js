import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import hexHeight from '../../lib/hex-height';
import hexPoints from '../../lib/hex-points';
import hexToPixel from '../../lib/hex-to-pixel';
import hexWidth from '../../lib/hex-width';
import idToHex from '../../lib/id-to-hex';
import { hexRectangle, pixelToHex } from '../../index.prod';

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

    this.update(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('cwrp');
    console.log(nextProps);
    this.update(nextProps);
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

  currentWorldViewData = []
  worldView = (hex) => {
    this.currentWorldViewData.length = 0;
    this.currentWorldViewData.push(...hexRectangle(10, 10, hex));
  };

  update = (props) => {
    this.worldView(pixelToHex(props.scrollPos, props.size));
    console.log(this.currentWorldViewData);

    const selection = this.svg.selectAll('rect').data(this.currentWorldViewData);

    selection.enter()
      .append('polygon')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('fill', d => this.terrainColor(props.world.data[d].terrain))
      .attr('points', d => hexPoints(hexToPixel(idToHex(d), props.size), props.size))
      .on('mouseenter', (d, i, dd) => { d3.select(dd[i]).attr('opacity', '0.5'); })
      .on('mouseleave', (d, i, dd) => { d3.select(dd[i]).attr('opacity', '1'); });
    selection.enter()
      .append('text')
      .attr('x', d => (hexToPixel(idToHex(d), props.size).x) - (props.size / 2))
      .attr('y', d => hexToPixel(idToHex(d), props.size).y)
      .attr('font-size', 10)
      .text(d => d);
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
  world: PropTypes.shape({}).isRequired,
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  scrollPos: PropTypes.shape({}),
};

Hexmap.defaultProps = {
  scrollPos: { x: 0, y: 0 },
};
