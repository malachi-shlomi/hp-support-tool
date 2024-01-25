import { Part } from "../lib/interfaces"

const parts: Part[] = [
    // Laptop 
    {   id: 100, 
        desc: "Screen",      
        productDependancies: ["hasScreen"],
        issues: [2001, 2002, 2003]
    },
    {   id: 101, 
        desc: "Keyboard",
        productDependancies: ["hasKeyboard"],
        issues: [2020, 2021]
    },
    {   id: 103, 
        desc: "Touchpad",
        productDependancies: ["hasTouchPad"],
        issues: [2030, 2031]
    },
    {   id: 104, 
        desc: "Battery", 
        productDependancies: ["hasBattery"],
        issues: [2050, 2051]
    },
    {   id: 118, 
        desc: "Speakers",
        productDependancies: ["hasSpeaker"],
        issues: [2080, 2081]
    },
    {   id: 120, 
        desc: "Camera",  
        productDependancies: ["hasCamera"],
        issues: [2090]
    },
    {   id: 122,
        desc: "Ports",
        productDependancies: ["hasPorts"],
        issues: [2100]
    },
    {   id: 123,
        desc: "WI-FI",
        productDependancies: ["hasWifi"],
        issues: [2060, 2061]
    },
    {   id: 124,
        desc: "Bluetooth",
        productDependancies: ["hasBluetooth"],
        issues: [2070, 2071]
    },
    {   id: 129,
        desc: "Microphone",
        productDependancies: ["hasMicrophone"],
        issues: [2110]
    },
    {   id: 134, 
        desc: "Fan",
        productDependancies: ["hasFan"] ,
        issues: [2040, 2041]
    },
];

export default parts;