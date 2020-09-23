function pickShape () {
    myhand = randint(1, 3)
    if (myhand == rockindex) {
        rockimage.showImage(0)
    }
    if (myhand == paperindex) {
        paperimage.showImage(0)
    }
    if (myhand == sicssorindex) {
        sicssorimage.showImage(0)
    }
}
input.onGesture(Gesture.Shake, function () {
    pickShape()
})
let myhand = 0
let sicssorimage: Image = null
let paperimage: Image = null
let rockimage: Image = null
let sicssorindex = 0
let paperindex = 0
let rockindex = 0
rockindex = 1
paperindex = 2
sicssorindex = 3
rockimage = images.createImage(`
    . . . . .
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    `)
paperimage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
sicssorimage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
