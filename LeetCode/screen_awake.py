from pynput.mouse import Controller
from pynput.keyboard import Key, Controller
import time


keyboard = Controller()
mouse = Controller()
t = int(input('How many minutes?:'))

for i in range(100):
    # mouse.position = (200,200)
    time.sleep(t*60)
    keyboard.press(Key.ctrl)
    keyboard.release(Key.ctrl)
    # mouse.move(20,0)
    # time.sleep(1)
    # mouse.move(0,20)
    # time.sleep(1)
    # mouse.move(-20,0)
    # time.sleep(1)
    # mouse.move(0,-20)

