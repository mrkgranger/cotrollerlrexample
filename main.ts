controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 3
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -3
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Plane`, SpriteKind.Enemy)
