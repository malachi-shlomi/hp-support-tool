import { CaseProps } from "../lib/interfaces";
import writeActions from "./writeActions";
import writeBatteryReport from "./writeBatteryReport";
import writeBeepCode from "./writeBeepCode";
import writeChecks from "./writeChecks";
import writeErrorMesssage from "./writeErrorMessage";
import writeIssue from "./writeIssue";
import writeLink from "./writeLink";


const writeTs: (caseProps: CaseProps) => { ts: string } = (caseProps) => {
    const TS_SECTIONS: {section: string, writer: (caseProps: CaseProps) => string | undefined, dependancy: boolean}[] = [
        {
            section: "issue",
            writer: writeIssue,
            dependancy: Boolean(caseProps.issue)
        },
        {
            section: "beepCodeText",
            writer: writeBeepCode,
            dependancy: Boolean(caseProps.beepCode.red && caseProps.beepCode.white && caseProps.beepCode.error)
        },
        {
            section: "errorMessage",
            writer: writeErrorMesssage,
            dependancy: Boolean(caseProps.errorMessage?.length)
        },
        {
            section: "pictureLink",
            writer: writeLink,
            dependancy: Boolean(caseProps.pictureLink?.length)
        },
        {
            section: "checks",
            writer: writeChecks,
            dependancy: Object.keys(caseProps.checks).length > 0
        },
        {
            section: "actions",
            writer: writeActions,
            dependancy: Object.keys(caseProps.actions).length > 0
        },
        {
            section: "batteryReport",
            writer: writeBatteryReport,
            dependancy: Boolean(caseProps.batteryCapacity.current && caseProps.batteryCapacity.design)
        },
    ]

    const relevantTsSections = TS_SECTIONS.filter(({dependancy}) => dependancy)
    const ts = relevantTsSections.map(({writer}) => writer(caseProps)).join("\n");
    return { ts };

}

export default writeTs;