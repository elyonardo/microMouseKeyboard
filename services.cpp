#include "pxt.h"
#include "BluetoothServices.h"
using namespace pxt;
/**
 * A set of functions to send keyboard commands over Bluetooth
 */
namespace bluetooth
{
BluetoothServices *pKeyboardInstance = nullptr;
BluetoothServices *getKeyboard()
{
    if (pKeyboardInstance == nullptr)
    {
        pKeyboardInstance = new BluetoothServices(uBit.ble);
    }
    return pKeyboardInstance;
}

BluetoothServices *pMouseInstance = nullptr;
BluetoothServices *getMouse()
{
    if (pMouseInstance == nullptr)
    {
        pMouseInstance = new BluetoothServices(uBit.ble);
    }
    return pMouseInstance;
}

//%
void keyboardSendOneKeyCode(Modifier modifier, uint8_t keyCode)
{
    BluetoothServices *pKeyboard = getKeyboard();
    pKeyboard->sendKeyCode(modifier, keyCode);
}

//%
uint8_t keyboardGetKeyCode(uint8_t character)
{
    BluetoothServices *pKeyboard = getKeyboard();
    return pKeyboard->getKeyCode(character);
}

//%
void keyboardSendText(StringData *data)
{
    BluetoothServices *pKeyboard = getKeyboard();
    ManagedString buf(data);
    if (buf.length() > 0)
    {
        pKeyboard->sendString(buf);
    }
}
    
//%
void mouseSpeed(int x, int y, int wheel)
{
    BluetoothServices *pMouse = getMouse();
    pMouse->setSpeed(x, y, wheel);
}

//%
void mouseButton(MouseButton button, ButtonState state)
{
    BluetoothsServices *pMouse = getMouse();
    pMouse->setButton(button, state);
}
}
