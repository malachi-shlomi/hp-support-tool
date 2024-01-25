import {Issue} from '../lib/interfaces'

const issues: Issue[] = [
    {   id: 1000,
        desc: "Doesn't turn on",
        productDependancies: ["hasPower"],
        showInMainPage: true,
        effects: {
            PCTurnsOn: false,
            needToCheckAnotherPowerAdapter: true,
            needToCheckAnotherCharger: true,
            needToCheckIfPowerLightIsOn: true,
            needToDoElectricDischarge: true,
            needToCheckPowerLight: true
        }
    },
    {   id: 1001,
        desc: "Display flickers",
        productDependancies: ["hasScreen"],
        showInMainPage: true,
        effects: {
            needToCheckInBios: true,
            needToCheckExternalDisplay: true,
            needToCheckAnotherPC: true,
            needToCheckOtherCables: true,
            needAPicture: true
        }
    },
    {   id: 1002,
        desc: "Battery empty fast",
        productDependancies: ["hasBattery"],
        showInMainPage: true,
        effects: {
            needToGetBatteryReport: true
        }
    },
    {   id: 1003,
        desc: "WI-FI isn't working",
        productDependancies: ["hasWifi"],
        showInMainPage: true,
        effects: {
            needToCheckIfCanConnectToInternet: true,
            needToCheckInDiagnostics: true
        }
    },
    {   id: 1004,
        desc: "Blue screen",
        productDependancies: ["hasScreen"],
        showInMainPage: true,
    },
    {   id: 1005,
        desc: "Power adapter isn't working",
        productDependancies: ["hasPowerAdapter"],
        showInMainPage: true,
        effects: {
            needToCheckAnotherPowerAdapter: true
        }
    },
    {   id: 1006,
        desc: "Fan isn't working",
        productDependancies: ["hasFan"],
        showInMainPage: true
    },
    {   id: 1008,
        desc: "PC is crushing",
        productDependancies: ["isAComputer"],
        showInMainPage: true
    },

    // display 
    {   id: 2001,
        desc: "Display Flickers",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckExternalDisplay: true,
            needToCheckAnotherPC: true,
            needToCheckOtherCables: true,
            needToCheckInBios: true,
            needAPicture: true
        }
    },
    {   id: 2002,
        desc: "Broken",
        productDependancies: [],
        showInMainPage: false
    },
    {   id: 2003,
        desc: "No display",
        productDependancies: [],
        showInMainPage: false, 
        effects: {
            needToCheckAnotherPC: true,
            needToCheckOtherCables: true,
            needToCheckExternalDisplay: true,
        }
    },

    // keyboard
    {   id: 2020,
        desc: "Some keys aren't working",
        productDependancies: [],
        showInMainPage: false, 
        effects: {
            needToTryExternalKeyboard: true,
            needToCheckInDiagnostics: true
        }
    },
    {   id: 2021,
        desc: "Keyboard Not working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToTryExternalKeyboard: true,
            needToCheckInDiagnostics: true
        }
    },

    // touchpad
    {   id: 2030,
        desc: "Touchpad isn't working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToTryExternalMouse: true,
            needToCheckInDiagnostics: true
        }
    },
    {   id: 2031,
        desc: "Not moving properly",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToTryExternalMouse: true,
            needToCheckInDiagnostics: true
        }
    },

    // fan
    {   id: 2040,
        desc: "Making loud noises",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needAPicture: true
        }
    },
    {   id: 2041,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false 
    },

    // battery
    {   id: 2050,
        desc: "Battery empty fast",
        productDependancies: [],
        showInMainPage: false 
    },
    {   id: 2051,
        desc: "Battery inflated",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needAPicture: true
        }
    },

    // WI-FI
    {   id: 2060,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true
        }
    },
    {   id: 2061,
        desc: "Disconnecting",
        productDependancies: [],
        showInMainPage: false ,
        effects: {
            needToCheckInDiagnostics: true
        }
    },

    // bluetooth
    {   id: 2070,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true
        }
    },
    {   id: 2071,
        desc: "Disconnecting",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true
        }
    },

    // speakers
    {   id: 2080,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true
        }
    },
    {   id: 2081,
        desc: "Making weird noises",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true,
            needAPicture: true
        }
    },

    // Camera
    {   id: 2090,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false 
    },
    
    // Ports
    {   id: 2100,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true,
            needAPicture: true
        }
    },

    // Microphone
    {   id: 2110,
        desc: "Not working",
        productDependancies: [],
        showInMainPage: false,
        effects: {
            needToCheckInDiagnostics: true
        }
    },

];


export default issues;