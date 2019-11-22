bluetooth.onBluetoothConnected(() => {
    basic.showString("C")
})

bluetooth.onBluetoothDisconnected(() => {
    basic.showString("D")
})

bluetooth.startService();
basic.showString("S")

input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    led.toggle(0, 0)

    bluetooth.keyboardSendText("Hello World!")
})
