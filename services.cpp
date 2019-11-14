#include "pxt.h"
#include "BluetoothServices.h"
using namespace pxt;
/**
 * A set of functions to send keyboard commands over Bluetooth
 */
namespace bluetooth
{
BluetoothKeyboardService *pKeyboardInstance = nullptr;
BluetoothKeyboardService *getKeyboard()
{
    if (pKeyboardInstance == nullptr)
    {
        pKeyboardInstance = new BluetoothKeyboardService(uBit.ble);
    }
    return pKeyboardInstance;
}

BluetoothMouseService *pMouseInstance = nullptr;
BluetoothMouseService *getMouse()
{
    if (pMouseInstance == nullptr)
    {
        pMouseInstance = new BluetoothMouseService(uBit.ble);
    }
    return pMouseInstance;
}

//%
void keyboardSendOneKeyCode(Modifier modifier, uint8_t keyCode)
{
    BluetoothKeyboardService *pKeyboard = getKeyboard();
    pKeyboard->sendKeyCode(modifier, keyCode);
}

//%
uint8_t keyboardGetKeyCode(uint8_t character)
{
    BluetoothKeyboardService *pKeyboard = getKeyboard();
    return pKeyboard->getKeyCode(character);
}

//%
void keyboardSendText(StringData *data)
{
    BluetoothKeyboardService *pKeyboard = getKeyboard();
    ManagedString buf(data);
    if (buf.length() > 0)
    {
        pKeyboard->sendString(buf);
    }
}
    
//%
void mouseSpeed(int x, int y, int wheel)
{
    BluetoothMouseService *pMouse = getMouse();
    pMouse->setSpeed(x, y, wheel);
}

//%
void mouseButton(MouseButton button, ButtonState state)
{
    BluetoothMouseService *pMouse = getMouse();
    pMouse->setButton(button, state);
}
}
