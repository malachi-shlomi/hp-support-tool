import { Dependacy } from "../../lib/interfaces";

const actionsDependancies: { [key: string]: Dependacy } = {
    needToUpdateDrivers: ({ issue, product, part, situation, checks, actions }) => {
        return (
            !situation.HARDWARE_ISSUE &&
            issue.possibleSolutions.includes("updateDrivers") &&
            part.canBeFixWithDriverUpdate &&
            product.isAComputer
        )
    },
    needToDoDDU: ({ issue, product, situation, part, actions, checks }) => {
        return (
            !situation.HARDWARE_ISSUE &&
            issue.possibleSolutions.includes("doDDU") &&
            part.canBeFixWithDDU &&
            product.isAComputer
        )
    },
    needToDoElectricDischarge: ({ issue, product }) => {
        return (
            product.isAComputer &&
            issue.possibleSolutions.includes("doElectricDischarge")
        )
    },
    needToUpdateBios: ({ issue, product, situation, part }) => {
        return (
            part.canBeFixByBIOSUpdate && issue.possibleSolutions.includes("updateBIOS") &&
            product.isAComputer &&
            !situation.HARDWARE_ISSUE &&
            !situation.BAD_CABLES
        )
    },
    needToDisableSoundEnhancements: ({ issue, product, situation, part }) => {
        return (
            part.canBeFixByDisablingSoundEnhancements && issue.possibleSolutions.includes("disableSoundEnhancements") &&
            product.isAComputer &&
            !situation.HARDWARE_ISSUE
        )
    },
    needToOpenCameraShutter: ({ issue, product, situation, part }) => {
        return (
            issue.possibleSolutions.includes("openCameraShutter") &&
            product.isAComputer &&
            part.hasShutter
        )
    },
}

export default actionsDependancies;
