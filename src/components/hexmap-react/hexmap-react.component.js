import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import * as d3 from 'd3';

import hexHeight from '../../lib/hex-height';
// import hexPoints from '../../lib/hex-points';
// import hexToPixel from '../../lib/hex-to-pixel';
import hexWidth from '../../lib/hex-width';
// import idToHex from '../../lib/id-to-hex';
import { hexRectangle } from '../../index.prod';
import pixelToHex from '../../lib/hex-to-pixel';

import Polygon from './polygon.component';

import style from './hexmap-react.component.scss';

export default class Hexmap extends Component {
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

  render() {
    console.log(this.props.world);
    // console.log('render hexmap-react.component');
    const hexesToRender =
      hexRectangle(10, 10, pixelToHex(this.props.scrollPos, 1.1)).map(hexId => (
        <Polygon
          key={hexId}
          terrain={this.terrainColor(_.get(this.props.world.data[hexId], 'terrain', 'ocean'))}
          id={hexId}
          size={this.props.size}
        />
      ));

    // console.log(hexRectangle(10, 10, pixelToHex(this.props.scrollPos, this.props.size)));
    return (
      <div
        ref={myRef => this.myRef = myRef} // eslint-disable-line no-return-assign
        className={style.hexmap}
      >
        <svg
          className="svg"
          width={((hexWidth(this.props.size) * (this.props.columns + 0.35)) * 0.75)}
          height={(hexHeight(this.props.size) * this.props.rows) + (hexHeight(this.props.size) / 2)}
        >
          <g transform={`translate(${this.props.size}, ${hexHeight(this.props.size) / 2})`}>
            {hexesToRender}
          </g>
        </svg>
      </div>
    );
  }
}

Hexmap.propTypes = {
  world: PropTypes.shape({ data: PropTypes.shape({}) }).isRequired,
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  scrollPos: PropTypes.shape({}),
};

Hexmap.defaultProps = {
  scrollPos: { x: 0, y: 0 },
};
