import { Check } from "../lib/interfaces";

import checksDependancies from './dependancies/checksDependancies'

const checks: Check[] = [

    {   desc: "Another Power Adapter",
        code: 'OTHER_PA',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'PA_SAME', effects: { BAD_PA: false }},
            { title: 'Works', type: 'good' , code: 'PA_WORK', effects: { BAD_PA: true }},
            { title: "Doesn't have", type: 'neutral', code: 'DH_PA', effects: { BAD_PA: true }}
        ],
        dependancies: checksDependancies.needToCheckAnotherPowerAdapter
    },
    {   desc: "External Mouse",
        code: 'EXT_MS',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'EXT_MS_SAME'},
            { title: 'Works', type: 'good' , code: 'EXT_MS_WORK'},
            { title: "Doesn't have", type: 'neutral', code: 'DH_EXT_MS' }
        ],
        dependancies: checksDependancies.needToTryExternalMouse
    },

    {   desc: "Other Charger",
        code: 'OTHER_CHARGER',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'CHARGER_SAME', effects: { BAD_CHARGER: false }},
            { title: 'Works', type: 'good' , code: 'CHARGER_WORKS', effects: { BAD_CHARGER: true }},
            { title: "Doesn't have", type: 'neutral', code: 'DH_CHARGER', effects: { BAD_CHARGER: null }}
        ],
        dependancies: checksDependancies.needToCheckAnotherCharger
    },
    {   desc: "Charging Light",
        code: 'CL',
        options: [
            { title: 'Off',type: 'bad',  code: 'CL_OFF', effects: { PC_DOES_NOT_CHARGE: true } },
            { title: 'On', type: 'good', code: 'CL_ON'},
        ],
        dependancies: checksDependancies.needToCheckChargingLight
    },

    {   desc: "Another PC",
        code: 'ANOTHER_PC',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'ANOTHER_PC_SAME' },
            { title: 'Works', type: 'good' , code: 'ANOTHER_PC_WORK', effects: { HARDWARE_ISSUE: false } },
            { title: "Doesn't have", type: 'neutral' , code: 'DH_ANOTHER_PC'},
        ],
        dependancies: checksDependancies.needToCheckAnotherPC
    },

    {   desc: "Other Cables",
        code: 'OTHER_CABLES',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'OTHER_CABLES_SAME' },
            { title: 'Works', type: 'good' , code: 'OTHER_CABLES_WORK' , effects: { BAD_CABLES: true }},
        ],
        dependancies: checksDependancies.needToCheckOtherCables
    },

    {   desc: "In Camera App",
        code: 'CAMERA_APP',
        options: [
            { title: 'Same',  type: 'bad' , code: 'CAMERA_APP_SAME', effects: { ISSUE_IN_SPESIFIC_APP: false }},
            { title: 'Works', type: 'good', code: 'CAMERA_APP_WORK', effects: { ISSUE_IN_SPESIFIC_APP: true } },
        ],
        dependancies: checksDependancies.needToCheckInCameraApp
    },

    {   desc: "Test in Diagnostics",
        code: 'DIAGNOSTICS',
        options: [
            { title: 'Failed', type: 'bad',  code: 'DIAGS_FAILED', effects: { HARDWARE_ISSUE: true } },
            { title: 'Passed', type: 'good', code: 'DIAGS_PASSED', effects: { HARDWARE_ISSUE: false } },
        ],
        dependancies: checksDependancies.needToCheckInDiagnostics
    },


    {   desc: "External Display",
        code: 'EXT_DISPLAY',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'EXT_DIS_SAME'},
            { title: 'Works Good', type: 'good' , code: 'EXT_DIS_WORK'},
            { title: "Doesn't have", type: 'neutral', code: 'DH_EXT_DIS' }
        ],
        dependancies: checksDependancies.needToCheckExternalDisplay
    },

    {   desc: "In BIOS",
        code: 'BIOS',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'BIOS_SAME', effects: { HARDWARE_ISSUE: true }},
            { title: 'Works Good', type: 'good' , code: 'BIOS_WORK'},
        ],
        dependancies: checksDependancies.needToCheckInBios
    },

    {   desc: "External Keyboard",
        code: 'EXT_KB',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'EXT_KB_SAME'},
            { title: 'Works', type: 'good' , code: 'EXT_KB_WORK'},
            { title: "Doesn't Have", type: 'neutral', code: 'DH_EXT_KB' }
        ],
        dependancies: checksDependancies.needToTryExternalKeyboard
    },
    {   desc: "Other Networks",
        code: 'OTHER_NETWORKS',
        options: [
            { title: 'Same',  type: 'bad'  , code: 'ANOTHER_NET_SAME'},
            { title: 'Works', type: 'good' , code: 'ANOTHER_NET_WORK', effects: { BAD_NETWORK: true }},
        ],
        dependancies: checksDependancies.needToCheckOtherNetworks
    },
    {   desc: "F2 Quick Test",
        code: 'F2_QUICK_TEST',
        options: [
            { title: 'Failed',  type: 'bad'  , code: 'F2_QUICK_FAILED', effects: { HARDWARE_ISSUE: true, BAD_DISK: true }},
            { title: 'Passed', type: 'good' , code: 'F2_QUICK_PASSED'},
        ],
        dependancies: checksDependancies.needToDoDiskQuickTest
    },

    {   desc: "Power Light",
        code: 'PL',
        options: [
            { title: 'Off', type: 'bad',  code: 'PL_OFF'},
            { title: 'On',  type: 'good', code: 'PL_ON' },
        ],
        dependancies: checksDependancies.needToCheckPowerLight
    },

]

export default checks;