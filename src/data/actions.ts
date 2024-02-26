import { Action } from "../lib/interfaces";
import actionsDependancies from "./dependancies/actionsDependancies";

const actions: Action[] = [
    {   desc: 'Drivers Updates',
        dependancies: actionsDependancies.needToUpdateDrivers,
        code: 'DRIVERS_UPDATE',
        effects: {
            NEED_LMI: true,
            NEED_FOLLOW_UP: true
        }
    },
    {   desc: 'DDU',
        dependancies: actionsDependancies.needToDoDDU,
        code: 'DDU',
        effects: {
            NEED_LMI: true,
            NEED_FOLLOW_UP: true
        }
    },
    {   desc: 'Electric Discharge',
        dependancies: actionsDependancies.needToDoElectricDischarge,
        code: 'DISCHARGE',
        effects: {
            NEED_LMI: false,
            NEED_FOLLOW_UP: false
        }
    },
    {   desc: 'BIOS Update',
        dependancies: actionsDependancies.needToUpdateBios,
        code: 'BIOS_UPDATE',
        effects: {
            NEED_LMI: true,
            NEED_FOLLOW_UP: true
        }
    },
    {   desc: 'Disable Sound Enhancements',
        dependancies: actionsDependancies.needToDisableSoundEnhancements,
        code: 'SOUND_ENHANCEMENTS',
        effects: {
            NEED_LMI: true,
            NEED_FOLLOW_UP: true
        }
    },
    {   desc: 'Open Camera Shutter',
        dependancies: actionsDependancies.needToOpenCameraShutter,
        code: 'CAMERA_SHUTTER',
    },
    {   desc: 'Firmware Update',
        dependancies: actionsDependancies.needFirmwareUpdate,
        code: 'FIRMWARE_UPDATE',
        effects: {
            NEED_LMI: true,
            NEED_FOLLOW_UP: true
        }
    },

]

export default actions;