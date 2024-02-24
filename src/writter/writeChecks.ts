import checkDict from "../dictionary/checks";
import { CaseProps } from "../lib/interfaces";

const writeChecks: (caseProps: CaseProps) => string = (caseProps) => {
    const { checks } = caseProps;

    const checkLines = Object.keys(checks).map(check => checkDict[checks[check]] + '.');

    return checkLines.join("\n");
}

export default writeChecks;
