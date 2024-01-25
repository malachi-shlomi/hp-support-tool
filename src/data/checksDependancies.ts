import { Dependency, Product } from "../lib/interfaces";

export default  {
    needToCheckInDiagnostics: (caseProps: {[key: string]: any}) => {
        return caseProps.hasDiagnostics && caseProps.needToCheckInDiagnostics;
    },
    needToCheckAnotherCharger: (caseProps: {[key: string]: any}) => {
        return caseProps.hasCharger && caseProps.needToCheckAnotherCharger;
    },
    needToCheckExternalDisplay: (caseProps: {[key: string]: any}) => {
        return caseProps.isALaptop && caseProps.needToCheckExternalDisplay;
    },
    needToCheckInBios: (caseProps: {[key: string]: any}) => {
        return caseProps.hasBios && caseProps.needToCheckInBios;
    },
    needToCheckAnotherPowerAdapter: (caseProps: {[key: string]: any}) => {
        return caseProps.hasPowerAdapter && caseProps.needToCheckAnotherPowerAdapter;
    },
    needToDoElectricDischarge: (caseProps: {[key: string]: any}) => {
        return caseProps.isAComputer && caseProps.needToDoElectricDischarge;
    },
    needToTryExternalKeyboard: (caseProps: {[key: string]: any}) => {
        return caseProps.needToTryExternalKeyboard;
    },
    needToTryExternalMouse: (caseProps: {[key: string]: any}) => {
        return caseProps.needToTryExternalMouse;
    },
    needToCheckPowerLight: (caseProps: {[key: string]: any}) => {
        return caseProps.hasPower && caseProps.needToCheckPowerLight;
    },
    needToCheckAnotherPC: (caseProps: {[key: string]: any}) => {
        return caseProps.isAMonitor && caseProps.needToCheckAnotherPC;
    },
    needToCheckOtherCables: (caseProps: {[key: string]: any}) => {
        return caseProps.isAMonitor && caseProps.needToCheckOtherCables;
    },
}

