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
}

export interface Part {
    id: number,
    desc: string,
    productDependancies: string[],
    issues: number[],
}

export interface Issue {
    id: number,
    desc: string,
    productDependancies: string[],
    showInMainPage: boolean,
    effects?: {[key: string]: any}
    checks?: number[]
}

export interface Check {
    id: number,
    desc: string,
    options: {title: string, type: string}[],
    dependancies: (caseProps: {[key: string]: any}) => boolean,
}

export interface PartIssue {
    id: number,
    desc: string
}

export interface Option {
    desc: string,
    id: number
}

export interface CaseProperty {
    property: string,
    value: string
}

export interface Dependency {
    or?: { [property: string]: any };
    and?: { [property: string]: any };
    not?: { [property: string]: any };
};


