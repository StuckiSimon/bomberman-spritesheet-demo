import Phaser from 'phaser'
import characterImg from './assets/character.png'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.spritesheet('character', characterImg, {
    frameWidth: 256,
    frameHeight: 256
  })
}

function create() {
  const spriteDown = this.add.sprite(400, 300, 'character').setScale(0.2)

  this.anims.create({
    key: 'walk_down',
    frames: [{ key: 'character', frame: 0 }, { key: 'character', frame: 1 }],
    frameRate: 6,
    repeat: 3
  })
  spriteDown.play('walk_down')
  this.tweens.add({
    targets: spriteDown,
    y: 400,
    duration: 1000,
    ease: 'Linear'
  })

  const spriteUp = this.add.sprite(400, 300, 'character').setScale(0.2)

  this.anims.create({
    key: 'walk_up',
    frames: [{ key: 'character', frame: 4 }, { key: 'character', frame: 5 }],
    frameRate: 6,
    repeat: 3
  })
  spriteUp.play('walk_up')
  this.tweens.add({
    targets: spriteUp,
    y: 200,
    duration: 1000,
    ease: 'Linear'
  })

  const spriteRight = this.add.sprite(400, 300, 'character').setScale(0.2)

  this.anims.create({
    key: 'walk_right',
    frames: [{ key: 'character', frame: 6 }, { key: 'character', frame: 7 }],
    frameRate: 6,
    repeat: 3
  })
  spriteRight.play('walk_right')
  this.tweens.add({
    targets: spriteRight,
    x: 500,
    duration: 1000,
    ease: 'Linear'
  })

  const spriteLeft = this.add.sprite(400, 300, 'character').setScale(0.2)

  this.anims.create({
    key: 'walk_left',
    frames: [{ key: 'character', frame: 2 }, { key: 'character', frame: 3 }],
    frameRate: 6,
    repeat: 3
  })
  spriteLeft.play('walk_left')
  this.tweens.add({
    targets: spriteLeft,
    x: 300,
    duration: 1000,
    ease: 'Linear'
  })
}
