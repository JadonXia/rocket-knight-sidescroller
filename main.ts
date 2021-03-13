scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    mySprite.startEffect(effects.ashes, 200)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    mySprite.startEffect(effects.ashes, 200)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Adventurer`, SpriteKind.Player)
mySprite.ay = 0
mySprite.vx = 0
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
info.setLife(50)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`fireball`, randint(-50, 50), randint(-50, 50))
})
