import {Product} from "../lib/interfaces";

const products: Product[] = [
    {
        productId: 1,
        productName: "Laptop",
        hasPower: true,
        hasBios: true,
        hasScreen: true,
        hasBattery: true,
        hasFan: true,
        hasCamera: true,
        hasSpeaker: true,
        hasWifi: true,
        hasBluetooth: true,
        hasUsb: true,
        hasCharger: true,
        hasPsu: false,
        hasPowerAdapter: false,
        hasKeyboard: true,
        hasTouchPad: true,
        hasTouchScreen: false,
        hasDisplayPort: true,
        hasHdmi: true,
        hasEthernet: true,
        hasMicrophone: true,
        hasHeadphoneJack: true,
        isAComputer: true,
        hasDiagnostics: true,
        isALaptop: true,
    },
    {
        productId: 2,
        productName: "Monitor",
        hasBios: false,
        hasPower: true,
        hasScreen: true,
        hasBattery: false,
        hasCamera: true,
        hasFan: false,
        hasSpeaker: true,
        hasWifi: false,
        hasBluetooth: false,
        hasUsb: false,
        hasPowerCable: true,
        hasCharger: false,
        hasPsu: false,
        hasPowerAdapter: false,
        hasKeyboard: false,
        hasTouchPad: false,
        hasTouchScreen: false,
        hasDisplayPort: true,
        hasHdmi: true,
        hasEthernet: false,
        hasMicrophone: false,
        hasHeadphoneJack: false,
        isAComputer: false,
        hasDiagnostics: false,
        isAMonitor: true,
        isALaptop: false
    },
    {
        productId: 3,
        productName: "Desktop",
        hasBios: true,
        hasPower: true,
        hasScreen: false,
        hasBattery: false,
        hasFan: true,
        hasCamera: false,
        hasSpeaker: false,
        hasWifi: true,
        hasBluetooth: true,
        hasUsb: true,
        hasPowerCable: true,
        hasCharger: false,
        hasPsu: true,
        hasPowerAdapter: false,
        hasKeyboard: false,
        hasTouchPad: false,
        hasTouchScreen: false,
        hasDisplayPort: true,
        hasHdmi: true,
        hasEthernet: true,
        hasMicrophone: false,
        hasHeadphoneJack: false,
        isAComputer: true,
        hasDiagnostics: true
    },
    {
        productId: 4,
        productName: "Mini",
        hasBios: true,
        hasPower: true,
        hasScreen: false,
        hasBattery: false,
        hasFan: true,
        hasCamera: false,
        hasSpeaker: false,
        hasWifi: false,
        hasBluetooth: false,
        hasUsb: true,
        hasPowerCable: true,
        hasCharger: false,
        hasPsu: false,
        hasPowerAdapter: true,
        hasKeyboard: false,
        hasTouchPad: false,
        hasTouchScreen: false,
        hasDisplayPort: true,
        hasHdmi: true,
        hasEthernet: true,
        hasMicrophone: false,
        hasHeadphoneJack: false,
        isAComputer: true,
        hasDiagnostics: true
    },
    {
        productId: 5,
        productName: "All in one",
        hasBios: true,
        hasPower: true,
        hasScreen: true,
        hasBattery: false,
        hasFan: true,
        hasCamera: true,
        hasSpeaker: true,
        hasWifi: true,
        hasBluetooth: true,
        hasUsb: true,
        hasPowerCable: true,
        hasCharger: false,
        hasPsu: true,
        hasPowerAdapter: false,
        hasKeyboard: false,
        hasTouchPad: false,
        hasTouchScreen: false,
        hasDisplayPort: true,
        hasHdmi: true,
        hasEthernet: false,
        hasMicrophone: false,
        isAComputer: true,
        hasDiagnostics: true
    },

];

export default products;