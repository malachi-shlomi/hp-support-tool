import { Dependacy } from "../../lib/interfaces";

const checksDependancies: { [key: string]: Dependacy } = {
    needToCheckInDiagnostics: (caseProps) => {
        const { hasDiagnostics } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        const { part } = caseProps;
        
        if (part.desc && !part.canBeCheckedInDiagnostic) {
            return false;
        }

        return hasDiagnostics && possibleSolutions.includes('testInDiagnostics');
    },
    needToCheckAnotherCharger: (caseProps) => {
        const { hasCharger } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return hasCharger && possibleSolutions.includes('checkAnotherCharger');
    },
    needToCheckExternalDisplay: (caseProps) => {
        const { isALaptop } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return isALaptop && possibleSolutions.includes("checkExternalDisplay");
    },
    needToCheckInBios: (caseProps) => {
        const { hasBios } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return hasBios && possibleSolutions.includes("checkInBios");
    },
    needToCheckInCameraApp: (caseProps) => {
        const { part } = caseProps;
        return part.desc === "Camera"
    },
    needToCheckAnotherPowerAdapter: (caseProps) => {
        const { hasPowerAdapter } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return hasPowerAdapter && possibleSolutions.includes("checkAnotherPowerAdapter");
    },
    needToTryExternalKeyboard: (caseProps) => {
        const { hasKeys } = caseProps.part;
        const { possibleSolutions } = caseProps.issue;
        return hasKeys && possibleSolutions.includes("tryAnotherKeyboard");
    },
    needToTryExternalMouse: (caseProps) => {
        const { isAMouse } = caseProps.part;
        const { possibleSolutions } = caseProps.issue;
        return isAMouse && possibleSolutions.includes("tryAnotherMouse");
    },
    needToCheckPowerLight: (caseProps) => {
        const { hasPower } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return hasPower && possibleSolutions.includes("checkIfPowerLightIsOn");
    },
    needToCheckChargingLight: (caseProps) => {
        const { hasCharger } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return hasCharger && possibleSolutions.includes("checkIfChargingLightIsOn");
    },
    needToCheckAnotherPC: (caseProps) => {
        const { isAMonitor } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        return isAMonitor && possibleSolutions.includes("tryAnotherPC");
    },
    needToCheckOtherCables: (caseProps) => {
        const { isAMonitor } = caseProps.product;
        const { possibleSolutions } = caseProps.issue;
        const { canWorkWithOtherCables } = caseProps.part;
        
        return (
            isAMonitor && possibleSolutions.includes("checkOtherCables") && (!caseProps.part.desc || caseProps.part.canWorkWithOtherCables) ||
            canWorkWithOtherCables && possibleSolutions.includes("checkOtherCables") && (!caseProps.part.desc || caseProps.part.desc !== "Screen")
        );
    },
    needToCheckOtherNetworks: (caseProps) => {
        const { canBeCheckedInOtherNetworks } = caseProps.part;
        const { possibleSolutions } = caseProps.issue;
        return canBeCheckedInOtherNetworks && possibleSolutions.includes("checkOtherNetworks");
    },
    needToDoDiskQuickTest: (caseProps) => {
        const { possibleSolutions } = caseProps.issue;
        return possibleSolutions.includes("QuickDiskTest");
    },
}

export default checksDependancies;

