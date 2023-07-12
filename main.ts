input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(0)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . # . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # # # # #
        `)
    basic.showString("AHH!")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.play(music.stringPlayable("E E A B B F C5 C ", 1200), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . . .
        # . . . #
        . # . . #
        . # # # .
        # # . # #
        `)
    basic.showLeds(`
        # . . # .
        . # . # #
        # . . . .
        # # . # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    basic.showLeds(`
        # . . . #
        # . . . #
        . . . . .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . #
        . . # . #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        . # # # .
        # # # # #
        . . . . .
        `)
    music.play(music.stringPlayable("F E C5 G A D C5 C ", 1200), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
basic.showString("HI!")
radio.setGroup(27)
basic.forever(function () {
	
})
