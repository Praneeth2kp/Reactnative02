package com.testproject;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.hardware.usb.UsbDevice;
import android.hardware.usb.UsbManager;

public class USBConnectionReceiver extends BroadcastReceiver {

    private boolean isConnected;

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        if (UsbManager.ACTION_USB_DEVICE_ATTACHED.equals(action)) {
            isConnected = true;
            UsbDevice device = intent.getParcelableExtra(UsbManager.EXTRA_DEVICE);

            // Do something with the USB device here
        } else if (UsbManager.ACTION_USB_DEVICE_DETACHED.equals(action)) {
            isConnected = false;

            // Do something here when the USB device is disconnected
        }
    }

    public boolean isConnected() {
        return isConnected;
    }
}
