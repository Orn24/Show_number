input.onButtonPressed(Button.A, function () {
    mode = 1
})
input.onButtonPressed(Button.B, function () {
    mode = 2
})
let mode = 0
let mynumber = 20
mode = 1
basic.forever(function () {
    if (mode == 1) {
        basic.showNumber(mynumber)
    } else {
        whaleysans.showNumber(mynumber)
    }
})
