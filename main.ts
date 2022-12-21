radio.setGroup(10)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
basic.forever(function () {
    radio.sendValue("LR", pins.analogReadPin(AnalogPin.P1))
    radio.sendValue("VR", pins.analogReadPin(AnalogPin.P2))
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showIcon(IconNames.Yes)
        radio.sendString("Start")
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showIcon(IconNames.No)
        radio.sendString("Stop")
    }
    basic.pause(100)
})
