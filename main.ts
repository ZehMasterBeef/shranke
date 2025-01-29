pins.servoWritePin(AnalogPin.P3, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.servoWritePin(AnalogPin.P3, 90)
        basic.pause(5000)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.servoWritePin(AnalogPin.P3, 0)
    }
})
