import { Check } from "../lib/interfaces";

import checksDependancies from '../data/checksDependancies'

const checks: Check[] = [

    {   id: 100, 
        desc: "Test in Diagnostics",
        options: [
            { title: 'Failed', type: 'bad'  },
            { title: 'Passed', type: 'good' }
        ],
        dependancies: checksDependancies.needToCheckInDiagnostics
    },

    {   id: 101,
        desc: "Other Charger",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
            { title: "Doesn't have", type: 'neutral' }
        ],
        dependancies: checksDependancies.needToCheckAnotherCharger
    },

    {   id: 102,
        desc: "External Display",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works Good', type: 'good' },
            { title: "Doesn't have", type: 'neutral' }
        ],
        dependancies: checksDependancies.needToCheckExternalDisplay
    },

    {   id: 103,
        desc: "In BIOS",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works Good', type: 'good' },
        ],
        dependancies: checksDependancies.needToCheckInBios
    },

    {   id: 104,
        desc: "Another power adapter",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
            { title: "Doesn't have", type: 'neutral' }
        ],
        dependancies: checksDependancies.needToCheckAnotherPowerAdapter
    },

    {   id: 105,
        desc: "After electric discharge",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
        ],
        dependancies: checksDependancies.needToDoElectricDischarge
    },

    {   id: 106,
        desc: "External keyboard",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
            { title: "Doesn't have", type: 'neutral' }
        ],
        dependancies: checksDependancies.needToTryExternalKeyboard
    },

    {   id: 107,
        desc: "External mouse",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
            { title: "Doesn't have", type: 'neutral' }
        ],
        dependancies: checksDependancies.needToTryExternalMouse
    },

    {   id: 108,
        desc: "Power light",
        options: [
            { title: 'Off',  type: 'bad'  },
            { title: 'On', type: 'good' },
        ],
        dependancies: checksDependancies.needToCheckPowerLight
    },

    {   id: 109,
        desc: "Another PC",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
            { title: "Doesn't have", type: 'neutral' },
        ],
        dependancies: checksDependancies.needToCheckAnotherPC
    },

    {   id: 110,
        desc: "Other cables",
        options: [
            { title: 'Same',  type: 'bad'  },
            { title: 'Works', type: 'good' },
            { title: "Doesn't have", type: 'neutral' },
        ],
        dependancies: checksDependancies.needToCheckOtherCables
    },


]

export default checks;