#include "pxt.h"
#include "BluetoothServices.h"
using namespace pxt;
/**
 * A set of functions to send keyboard commands over Bluetooth
 */
namespace bluetooth
{
BluetoothServices *pInstance = nullptr;
BluetoothServices *getKeyMouse()
{
    if (pInstance == nullptr)
    {
        pInstance = new BluetoothServices(uBit.ble);
    }
    return pInstance;
}

//%
void keyboardSendOneKeyCode(Modifier modifier, uint8_t keyCode)
{
    BluetoothServices *pInstance = getKeyMouse();
    pInstance->sendKeyCode(modifier, keyCode);
}

//%
uint8_t keyboardGetKeyCode(uint8_t character)
{
    BluetoothServices *pInstance = getKeyMouse();
    return pInstance->getKeyCode(character);
}

//%
void keyboardSendText(StringData *data)
{
    BluetoothServices *pInstance = getKeyMouse();
    ManagedString buf(data);
    if (buf.length() > 0)
    {
        pInstance->sendString(buf);
    }
}
    
//%
void mouseSpeed(int x, int y, int wheel)
{
    BluetoothServices *pInstance = getKeyMouse();
    pInstance->setSpeed(x, y, wheel);
}

//%
void mouseButton(MouseButton button, ButtonState state)
{
    BluetoothsServices *pInstance = getKeyMouse();
    pInstance->setButton(button, state);
}
}
