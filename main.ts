function Open_Gate () {
    pins.servoWritePin(AnalogPin.P3, 90)
    HasWaited = 0
    while (HasWaited != 5) {
        HasWaited += 1
    }
    Close_Gate()
}
function Close_Gate () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.servoWritePin(AnalogPin.P3, 0)
    }
}
let HasWaited = 0
pins.servoWritePin(AnalogPin.P3, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        Open_Gate()
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        Open_Gate()
    }
})
basic.forever(function () {
	
})
