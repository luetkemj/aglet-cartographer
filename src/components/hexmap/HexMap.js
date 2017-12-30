import { Application, Sprite, Text, TextStyle } from 'pixi.js';
import { each } from 'lodash';
import HexTile from './HexTile';

export default class HexMap extends Application {
  constructor(config, data) {
    super({ antialias: true, width: 975 });

    this.config = config;
    this.data = data;

    this.dragEaseTimer = null;
    this.draggingStage = false;

    this.styleTerrainKey = new TextStyle({
      fontSize: 12,
      fill: '#FFFFFF',
    });

    this.addHexes();

    this.stage.x = 0;
    this.stage.y = 0;

    this.stage.interactive = true;
    this.stage
      .on('pointerdown', this.onDragStart.bind(this))
      .on('pointerup', this.onDragEnd.bind(this))
      .on('pointerupoutside', this.onDragEnd.bind(this))
      .on('pointermove', this.onDragMove.bind(this));
  }

  addHexes() {
    each(this.data.data, (hex) => {
      // add hexTile
      const tile = new HexTile(hex, {
        showSeeds: this.config.showSeeds,
        showBoundaries: this.config.showBoundaries,
      });

      each(hex.textures, (texture) => {
        const sprite = new Sprite(texture);
        sprite.position.set(0, 0);
        sprite.width = hex.width;
        sprite.height = hex.height;

        tile.addChild(sprite);
      });

      this.stage.addChild(tile);

      // add hexTerrainKeys
      const terrainKey = new Text(hex.terrainKey, this.styleTerrainKey);
      terrainKey.x = hex.point.x + 10;
      terrainKey.y = hex.point.y + 10;
      if (this.config.showTerrainKeys) {
        this.stage.addChild(terrainKey);
      }
    });
  }

  dragEase(vel) {
    let stepX = vel.x / 10;
    let stepY = vel.y / 10;
    let count = 0.1;

    this.dragEaseTimer = setInterval(() => {
      stepX *= 0.9;
      stepY *= 0.9;
      this.stage.x += stepX;
      this.stage.y += stepY;
      count += 1;

      if (count >= 1000) {
        clearInterval(this.dragEaseTimer);
      }
    }, 10);
  }

  // drag map
  onDragStart() {
    this.draggingStage = false; // true to getting scrolling
  }

  onDragEnd() {
    this.draggingStage = false;
    this.dragEase({
      x: this.renderer.plugins.interaction.mouse.originalEvent.movementX,
      y: this.renderer.plugins.interaction.mouse.originalEvent.movementY,
    });
  }

  onDragMove() {
    if (this.draggingStage) {
      const { movementX } = this.renderer.plugins.interaction.mouse.originalEvent;
      const { movementY } = this.renderer.plugins.interaction.mouse.originalEvent;
      const maxX = 0;
      const maxY = 0;
      const minX = this.data.width * -1;
      const minY = (this.data.height * -1) + 550;

      if ((this.stage.x + movementX) > maxX) {
        this.stage.x = maxX;
      } else {
        this.stage.x += movementX;
      }

      if ((this.stage.x + movementX) < minX) {
        this.stage.x = minX;
      } else {
        this.stage.x += movementX;
      }

      if ((this.stage.y + movementY) > maxY) {
        this.stage.y = maxY;
      } else {
        this.stage.y += movementY;
      }

      if ((this.stage.y + movementY) < minY) {
        this.stage.y = minY;
      } else {
        this.stage.y += movementY;
      }
    }
  }
}
