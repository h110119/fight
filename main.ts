input.onButtonPressed(Button.A, function () {
    我.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    箭 = game.createSprite(我.get(LedSpriteProperty.X), 我.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        箭.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (箭.isTouching(標靶)) {
        game.addScore(1)
    }
    箭.delete()
})
input.onButtonPressed(Button.B, function () {
    我.change(LedSpriteProperty.X, 1)
})
let 箭: game.LedSprite = null
let 標靶: game.LedSprite = null
let 我: game.LedSprite = null
我 = game.createSprite(2, 4)
標靶 = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    標靶.change(LedSpriteProperty.X, randint(1, -1))
    basic.pause(500)
})
