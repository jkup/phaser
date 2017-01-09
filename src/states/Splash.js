import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.game.load.image('sky', 'assets/images/sky.png')
    this.game.load.image('ground', 'assets/images/platform.png')
    this.game.load.image('star', 'assets/images/star.png')
    this.game.load.spritesheet('dude', 'assets/images/dude.png', 32, 48)
  }

  create () {
    this.state.start('Game')
  }

}
