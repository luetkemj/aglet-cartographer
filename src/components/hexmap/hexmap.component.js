import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { each } from 'lodash';
import { Sprite } from 'pixi.js';

import HexMap from './HexMap';
import style from './hexmap.component.scss';

function updateSprites(hexes, data) {
  each(hexes, (hex) => {
    each(hex.children, (child, index) => {
      const sprite = new Sprite(data[hex.hex.id].textures[index]);
      sprite.position.set(0, 0);
      sprite.width = hex.width;
      sprite.height = hex.height;
      hex.removeChildAt(index);
      hex.addChildAt(sprite, index);
    });
  });
}

export default class Hexmap extends PureComponent {
  componentDidMount() {
    this.pixiApp = new HexMap({
      showTerrainKeys: false,
      showSeeds: false,
      showBoundaries: false,
    }, this.props.data);

    this.canvas.appendChild(this.pixiApp.view);
    this.pixiApp.ticker.stop();
  }

  componentWillReceiveProps(props) {
    updateSprites(this.pixiApp.stage.children, props.data.data);
    this.pixiApp.render();
    this.pixiApp.ticker.stop();
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
