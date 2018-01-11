import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { each } from 'lodash';
import { Sprite } from 'pixi.js';


import { colors, constructedLocations } from '../../textures/terrains.textures';

import HexMap from './HexMap';
// import HexTile from './HexTile';

import style from './hexmap.component.scss';

export default class Hexmap extends PureComponent {
  componentDidMount() {
    this.pixiApp = new HexMap({
      showTerrainKeys: false,
      showSeeds: false,
      showBoundaries: false,
    }, this.props.data);

    this.canvas.appendChild(this.pixiApp.view);
  }

  componentWillReceiveProps() {
    // this.pixiApp = new HexMap({
    //   showTerrainKeys: false,
    //   showSeeds: false,
    //   showBoundaries: false,
    // }, nextProps.data);
    this.pixiApp.data.data['0,0,0'].textures = [
      colors.textures.dense,
      constructedLocations.textures.treeFortress,
    ];

    // console.log(colors.textures.dense);
    const hex = this.pixiApp.stage.children[0];
    console.log(hex);
    const newSprites = each(hex.children, (val, index) => {
      const sprite = new Sprite(colors.textures.dense);
      sprite.position.set(0, 0);
      sprite.width = hex.width;
      sprite.height = hex.height;

      // hex.children[index] = sprite;
      hex.children.splice(index, 1);
      hex.addChild(sprite);
    });
    console.log(newSprites);
    console.log(this.pixiApp);

    this.pixiApp.render();
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
