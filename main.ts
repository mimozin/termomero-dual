let Fahrenheit = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.temperature()))
    }
    if (input.buttonIsPressed(Button.B)) {
        Fahrenheit = input.temperature() * (9 / 5) + 32
        basic.showString("" + (Fahrenheit))
    }
})
