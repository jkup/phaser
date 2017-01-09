/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.player = null
    this.platforms = null
  }

  preload () {}

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky')

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.game.add.group()

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true

    // Here we create the ground.
    let ground = this.platforms.create(0, this.game.world.height - 64, 'ground')

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2)

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true

    //  Now let's create two ledges
    let ledge = this.platforms.create(400, 400, 'ground')

    ledge.body.immovable = true

    ledge = this.platforms.create(-150, 250, 'ground')

    ledge.body.immovable = true

    // The player and its settings
    this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude')

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player)

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.2
    this.player.body.gravity.y = 300
    this.player.body.collideWorldBounds = true

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true)
    this.player.animations.add('right', [5, 6, 7, 8], 10, true)
  }

  update () {
    //  Collide the player and the stars with the platforms
    this.game.physics.arcade.collide(this.player, this.platforms)
  }

  render () {}
}
