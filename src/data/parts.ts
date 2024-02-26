import { Part 
} from "../lib/interfaces"

const parts: Part[] = [
    // Laptop 
    {   desc: "Screen",      
        productDependancies: ["hasScreen"],
        canBreak: true,
        canStopTurningOn: true,
        canFlicker: true,
        canBeCheckedInBIOS: true,
        canBeFixWithDDU: true,
        canBeFixByFormat: true,
        canWorkWithOtherCables: true,
    },
    {   desc: "Keyboard",
        productDependancies: ["hasKeyboard"],
        canBreak: false,
        canStopWorking: true,
        hasKeys: true,
        canBeCheckedInDiagnostic: true,
        canBeFixByFormat: true,
    },
    {   desc: "Touchpad",
        productDependancies: ["hasTouchPad"],
        canStopWorking: true,
        canBeCheckedInDiagnostic: true,
        canNotMoveSmoothly: true,
        canBeFixWithDriverUpdate: true,
        isAMouse: true,
        canBeFixByFormat: true,
    },
    {   desc: "Battery", 
        productDependancies: ["hasBattery"],
        canInflatate: true,
        canBeCheckedInDiagnostic: true,
        canEmptyFast: true,
        canBeFixByFormat: true,
    },
    {   desc: "Speakers",
        productDependancies: ["hasSpeaker"],
        canStopWorking: true,
        canBeCheckedInDiagnostic: true,
        canMakeWeirdNoises: true,
        canBeFixWithDriverUpdate: true,
        canBeFixWithDDU: true,
        canBeFixByFormat: true,
        plural: true,
        canBeFixByDisablingSoundEnhancements: true,
        canBeFixByFirmwareUpdate: true,
    },
    {   desc: "Camera",
        productDependancies: ["hasCamera"],
        canStopWorking: true,
        canBeFixWithDriverUpdate: true,
        canStopWorkInSpecificsApps: true,
        hasShutter: true,
        canBeFixByFormat: true,
        canBeFixByFirmwareUpdate: true,
    },
    {   desc: "Ports",
        productDependancies: ["hasPorts"],

        subParts: [
            {   desc: "All the ports",  
                productDependancies: ["hasPorts"],
                canStopWorking: true,
                canBeCheckedInDiagnostic: true,
                canBeFixByBIOSUpdate: true,
                canWorkWithOtherCables: true,
                plural: true
            },
            {   desc: "USB",  
                productDependancies: ["hasUsb"],
                canStopWorking: true,
                canBeCheckedInDiagnostic: true,
                canBeFixByBIOSUpdate: true,
                canWorkWithOtherCables: true,
            },
            {   desc: "Type-C",
                productDependancies: ["hasTypeC"],
                canStopWorking: true,
                canBeFixByBIOSUpdate: true,
                canWorkWithOtherCables: true,
            },
            {   desc: "HDMI",  
                productDependancies: ["hasHdmi"],
                canStopWorking: true,
                canBeFixByBIOSUpdate: true,
                canWorkWithOtherCables: true,
            },
            {   desc: "Display Ports",  
                productDependancies: ["hasDisplayPort"],
                canStopWorking: true,
                canBeFixByBIOSUpdate: true,
                canWorkWithOtherCables: true,
                plural: true
            },
            {   desc: "Network Port",  
                productDependancies: ["hasNetworkPort"],
                canStopWorking: true,
                canBeCheckedInDiagnostic: true,
                canBeFixByBIOSUpdate: true,
                canBeCheckedInOtherNetworks: true,
                canWorkWithOtherCables: true,
            },
            
        ]

    },
    {   desc: "WI-FI",
        productDependancies: ["hasWifi"],
        canStopWorking: true,
        canBeCheckedInDiagnostic: true,
        canBeFixWithDriverUpdate: true,
        canBeFixByFormat: true,
        canDisconnect: true,
        canBeCheckedInOtherNetworks: true
    },
    {   desc: "Bluetooth",
        productDependancies: ["hasBluetooth"],
        canStopWorking: true,
        canBeCheckedInDiagnostic: true,
        canBeFixWithDriverUpdate: true,
        canBeFixByFormat: true,
        canDisconnect: true,
    },
    {   desc: "Microphone",
        productDependancies: ["hasMicrophone"],
        canStopWorking: true,
        canBeFixWithDriverUpdate: true,
        canBeCheckedInDiagnostic: true,
        canBeFixByFormat: true,
        canStopWorkInSpecificsApps: true,
    },
    {   desc: "Fan",
        productDependancies: ["hasFan"],
        canStopWorking: true,
        canMakeLoudNoises: true,
        canBeFixByBIOSUpdate: true,
        canHave90B: true,
    },
];

export default parts;