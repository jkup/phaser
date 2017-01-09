import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.game.load.image('sky', 'assets/images/sky.png')
    this.game.load.image('ground', 'assets/images/platform.png')
    this.game.load.image('star', 'assets/images/star.png')
    this.game.load.spritesheet('zombie', 'assets/images/zombie.png', 53.75, 64.8)
  }

  create () {
    this.state.start('Game')
  }

}
