import checkDict from "../dictionary/checks";
import { CaseProps } from "../lib/interfaces";

const writeBatteryReport: (caseProps: CaseProps) => string = (caseProps) => {
    const { current, design } = caseProps.batteryCapacity;
    const { batteryPercentage } = caseProps.situation;
    
    return `In the Battery report,
the battery capacity is ${current} / ${design} mAh.
(down by ${(100 - batteryPercentage).toFixed(1)}%)
`
    
}   

export default writeBatteryReport;