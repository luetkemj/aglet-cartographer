import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HexMap from './HexMap';

import style from './hexmap.component.scss';

export default class Hexmap extends Component {
  componentDidMount() {
    this.pixiApp = new HexMap({
      showTerrainKeys: false,
      showSeeds: false,
      showBoundaries: false,
    }, this.props.data);

    this.canvas.appendChild(this.pixiApp.view);
  }

  componentWillReceiveProps(nextProps) {
    const pixiApp = { old: this.pixiApp.view };

    this.pixiApp = new HexMap({
      showTerrainKeys: false,
      showSeeds: false,
      showBoundaries: false,
    }, nextProps.data);

    this.canvas.replaceChild(this.pixiApp.view, pixiApp.old);

    delete pixiApp.old;
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
  data: PropTypes.shape().isRequired,
};
