namespace bluetooth {
    /**
     * Starts the Keyboard service over Bluetooth and registers it as the Keyboard transport.
     */
    //% blockId="bluetooth_start_keyboard"
    //% block="bluetooth start keyboard service"
    //% parts="bluetooth"
    export function startKeyboardService() {
        function send(text: string) {
            bluetooth.keyboardSendText(text);
        }
        bluetooth.keyboardSendOneKeyCode([], KeyCode.KEY_NONE);
    }
    
    /**
     * Gets the modifier key
     */
    //% weight=2 blockGap=8
    //% blockId="modifier" block="%modifier"
    //% advanced=true
    export function modifier(modifier: Modifier): Modifier {
        return modifier;
    }

    /**
     * Gets the keyCode
     */
    //% weight=2 blockGap=8
    //% blockId="keyCode" block="%keyCode"
    //% advanced=true
    export function keyCode(keyCode: KeyCode): KeyCode {
        return keyCode;
    }

    /**
     * Sends a Keyboard key-up/down message (with modifiers and keyCode)
     */
    //% blockId="bluetooth_keyboard_send_one_key_code"
    //% block="keyboard|send one key with %modifiers|and keyCode %keyCode"
    //% parts="bluetooth"
    export function keyboardSendOneKeyCode(modifiers: Modifier[], keyCode: KeyCode) {
        let modifier = Modifier.MODIFIER_NONE;
        for (let i = 0, length = modifiers.length; i < length; i++) {
            modifier |= modifiers[i];
        }
        keyboardSendOneKeyCodeInternal(modifier, keyCode);
        return;
    }

    /**
     * Used internally by keyboardSendOneKeyCode()
     */
    //% shim=bluetooth::keyboardSendOneKeyCode
    //% advanced=true
    function keyboardSendOneKeyCodeInternal(modifier: Modifier, keyCode: KeyCode) {
        return;
    }

    /**
     * Sends a Keyboard message
     */
    //% blockId="bluetooth_keyboard_send_text"
    //% block="keyboard|send %text"
    //% parts="bluetooth"
    //% shim=bluetooth::keyboardSendText
    //% advanced=true
    export function keyboardSendText(text: string) {
        return;
    }
    
    /**
     * Starts the Mouse service over Bluetooth and registers it as the Mouse transport.
     */
    //% blockId="bluetooth_start_mouse"
    //% block="bluetooth start mouse service"
    //% parts="bluetooth"
    export function startMouseService() {
        bluetooth.setMouseSpeed(0, 0, 0);
    }

    /**
     * Sets a Mouse speed
     */
    //% blockId="bluetooth_mouse_set_speed"
    //% block="mouse|set speed to x: %x, y: %y, and wheel: %wheel"
    //% parts="bluetooth"
    //% shim=bluetooth::mouseSpeed
    //% advanced=true
    export function setMouseSpeed(x: number, y: number, wheel: number) {
        return;
    }

    /**
     * Sets a Mouse button
     */
    //% blockId="bluetooth_mouse_set_speed"
    //% block="mouse|set button %button to %state"
    //% parts="bluetooth"
    //% shim=bluetooth::mouseButton
    //% advanced=true
    export function setMouseButton(button: MouseButton, state: ButtonState) {
        return;
    }

    /**
     * Gets the button
     */
    //% weight=2 blockGap=8
    //% blockId="button" block="%button"
    //% advanced=true
    export function button(button: MouseButton): MouseButton {
        return button;
    }

    /**
     * Gets the button state
     */
    //% weight=2 blockGap=8
    //% blockId="buttonState" block="%buttonState"
    //% advanced=true
    export function buttonState(buttonState: ButtonState): ButtonState {
        return buttonState;
    }
}
