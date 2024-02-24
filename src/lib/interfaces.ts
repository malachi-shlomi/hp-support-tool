export interface Product {
    productId: number;
    productName: string;
    hasPower?: boolean;
    hasBios: boolean;
    hasScreen: boolean;
    hasBattery?: boolean;
    hasFan?: boolean;
    hasCamera?: boolean;
    hasSpeaker?: boolean;
    hasWifi?: boolean;
    hasBluetooth?: boolean;
    hasUsb?: boolean;
    hasPowerCable?: boolean;
    hasCharger?: boolean;
    hasPsu?: boolean;
    hasPowerAdapter?: boolean;
    hasKeyboard?: boolean;
    hasTouchPad?: boolean;
    hasTouchScreen?: boolean;
    hasDisplayPort?: boolean;
    hasHdmi?: boolean;
    hasEthernet?: boolean; 
    hasMicrophone?: boolean;
    hasHeadphoneJack?: boolean;
    isAComputer?: boolean;
    hasDiagnostics?: boolean;
    isAMonitor?: boolean;
    isALaptop?: boolean;
    hasPorts: boolean;
    hasBeepCode?: boolean;
    hasNetworkPort?: boolean;
}

export interface Part {
    desc: string,
    note? :string,
    productDependancies: string[],
    canBreak?: boolean,
    canStopWorking?: boolean,
    canStopTurningOn?: boolean,
    canMakeLoudNoises?: boolean,
    canMakeWeirdNoises?: boolean,
    canInflatate?: boolean,
    canDisconnect?: boolean,
    canNotMoveSmoothly?: boolean,
    hasKeys?: boolean,
    canBeCheckedInBIOS?: boolean,
    canFlicker?: boolean,
    canEmptyFast?: boolean,
    canBeCheckedInDiagnostic?: boolean,
    canBeCheckedWithSystemTest?: boolean,
    canBeFixWithDriverUpdate?: boolean,
    canBeFixWithDDU?: boolean,
    canBeFixByFormat?: boolean,
    canBeFixByBIOSUpdate?: boolean,
    canStopWorkInSpecificsApps?: boolean,
    isAMouse?: boolean,
    subParts?: Part[],
    plural?: boolean,
    canBeCheckedInDiagnostics?: boolean,
    canBeCheckedInOtherNetworks?: boolean,
    canHave90B?: boolean,
    canWorkWithOtherCables?: boolean,
    canBeFixByDisablingSoundEnhancements?: boolean,
    hasShutter?: boolean
}

export interface Properties {
    [key: string]: any
}

export interface Issue {
    desc: string,
    productDependancies?: string[],
    partDependancies?: string[],
    possibleSolutions?: string[],
    effects?: Properties,
    note?: string
    solvedNote?: string
}

export interface Check {
    desc: string,
    code: string,
    options: { title: string, type: string, code: string, effects?: Properties, checked?: boolean }[],
    dependancies: (caseProps: CaseProps) => boolean,
}

export interface PartIssue {
    desc: string
    partDependancies: string[],
    effects?: Properties
}

export interface CaseProps {
    product:   Properties;
    issue:     Properties;
    part:      Properties;
    subPart:   Properties;
    checks:    Properties;
    actions:   Properties;
    situation: Properties;
    pictureLink: string | null;
    batteryCapacity: {
        current?: number | null,
        design?: number | null
    },
    beepCode: Properties,
    errorMessage?: string,
    linkResultCode: string | null,
}

export type Dependacy = (caseProps: CaseProps) => boolean;

export interface Action {
    desc: string,
    dependancies: (caseProps: CaseProps) => boolean,
    code: string,
    effects?: Properties,
    state?: true | false | null
}

export interface Frequency {
    desc: string;
}

export interface Resolution {
    desc: string;
    note?: string;
    dependancies: (caseProps: CaseProps) => boolean;
}

export interface Order {
    desc: string;
    note?: string;
    dependancies: (caseProps: CaseProps) => boolean;
}




