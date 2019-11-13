bluetooth.onBluetoothConnected(() => {
    basic.showString("C")
})

bluetooth.onBluetoothDisconnected(() => {
    basic.showString("D")
})

bluetooth.startKeyboardService();
basic.showString("S")

input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    led.toggle(0, 0)

    bluetooth.keyboardSendText("Hello World!")
})

input.onButtonPressed(Button.B, () => {
    basic.clearScreen()
    led.toggle(1, 1)

    // ctrl-alt-del
    bluetooth.keyboardSendOneKeyCode([ Modifier.MODIFIER_LEFT_CTRL, Modifier.MODIFIER_LEFT_ALT ], KeyCode.KEY_DELETE)
})

input.onPinPressed(TouchPin.P0, () => {
    bluetooth.setMouseButton(MouseButton.MOUSE_BUTTON_LEFT, ButtonState.BUTTON_DOWN)
})
input.onPinReleased(TouchPin.P0, () => {
    bluetooth.setMouseButton(MouseButton.MOUSE_BUTTON_LEFT, ButtonState.BUTTON_UP)
})

input.onPinPressed(TouchPin.P1, () => {
    bluetooth.setMouseButton(MouseButton.MOUSE_BUTTON_RIGHT, ButtonState.BUTTON_DOWN)
})
input.onPinReleased(TouchPin.P1, () => {
    bluetooth.setMouseButton(MouseButton.MOUSE_BUTTON_RIGHT, ButtonState.BUTTON_UP)
})

basic.forever(() => {
    bluetooth.setMouseSpeed(input.acceleration(Dimension.X) / 8, input.acceleration(Dimension.Y) / 8, 0)
})
