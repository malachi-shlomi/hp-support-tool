import { keyboard } from '@testing-library/user-event/dist/keyboard';
import {Issue , PartIssue} from '../lib/interfaces'

export const issues: Issue[] = [
    {   desc: "Doesn't Turn On",
        productDependancies: ["hasPower"],
        possibleSolutions: ["checkAnotherPowerAdapter", "checkIfChargingLightIsOn", "checkAnotherCharger", "checkIfPowerLightIsOn", "doElectricDischarge", "getBeepCode"],
        effects: {
            PC_DOESNT_TURN_ON: true,
        },
        note: "The PC doesn't turn on",
        solvedNote: "- Now turns on.",
    },
    {   desc: "Heating",
        productDependancies: ["isAComputer"],
        possibleSolutions: ["startSystemTest", "format"],
        note: 'The PC is getting hot',
    },
    {   desc: "Blue Screens",
        productDependancies: ["isAComputer"],
        possibleSolutions: ["startSystemTest", "updateDrivers", "format", "checkFrequency", "getErrorMessage"],
        note: 'There are Blue Screens',
    },
    {   desc: "PC Doesn't Boot",
        productDependancies: ["isAComputer"],
        possibleSolutions: ["startSystemTest", "format", "getErrorMessage", "QuickDiskTest", "format"],
        note: "The PC doesn't boot to OS",
    },
    {   desc: "No Display",
        productDependancies: ["isAMonitor"],
        possibleSolutions: ["tryAnotherPC"],
        note: "The Monitor turns on, but there's no Display",
    },
];

export const partIssues: Issue[] = [
    {   desc: "Not Working",
        partDependancies: ["canStopWorking"],
        possibleSolutions: ["updateDrivers", "doDDU", "testInDiagnostics", "updateBIOS", "format", "tryAnotherKeyboard", "tryAnotherMouse", "checkFrequency", "checkOtherNetworks", "checkOtherCables", "openCameraShutter"]
    },
    {   desc: "Flickering",
        partDependancies: ["canFlicker"],
        possibleSolutions: ["checkOtherCables", "doDDU","checkInBios", "checkExternalDisplay", "format", "tryAnotherPC", "getPicture", "checkFrequency"],
    },
    {   desc: "Broken",
        partDependancies: ["canBreak"],
        possibleSolutions: ["getPicture"],
        effects: {
            CID: true,
        }
    },
    {   desc: "Not Moving Smootly",
        partDependancies: ["canNotMoveSmoothly"],
        possibleSolutions: ["testInDiagnostics", "tryAnotherMouse", "format"],
    },
    {   desc: "Making Loud Noises",
        partDependancies: ["canMakeLoudNoises"],
        possibleSolutions: ["getPicture"],
    },
    {   desc: "Disconnecting",
        partDependancies: ["canDisconnect"],
        possibleSolutions: ["testInDiagnostics", "updateDrivers", "format", "checkFrequency"],
    },
    {   desc: "Making Weird Noises",
        partDependancies: ["canMakeWeirdNoises"],
        possibleSolutions: ["getPicture", "disableSoundEnhancements", "doDDU"],
    },
    {   desc: "Empties Fast",
        partDependancies: ["canEmptyFast"],
        possibleSolutions: ["getBatteryReport", "replaceBattery"],
        note: 'The Battery empties fast'
    },
    {   desc: "Inflated",
        partDependancies: ["canInflatate"],
        possibleSolutions: ["getPicture"],
        note: 'The Battery inflated'
    },
    {   desc: "Some Keys Aren't Working",
        partDependancies: ["hasKeys"],
        possibleSolutions: ["testInDiagnostics", "format", "tryAnotherKeyboard"],
        note: 'Some keys on the Keyboard are not working'
    },
    {   desc: "90B Error",
        partDependancies: ["canHave90B"],
        possibleSolutions: ["updateBIOS"],
        note: 'There is an error message related to the Fan (90B)'
    },
]

