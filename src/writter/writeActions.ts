import actionsDict from "../dictionary/actions";
import { CaseProps } from "../lib/interfaces";

const writeActions: (caseProps: CaseProps) => string = (caseProps) => {
    const {
        actions,
        situation,
        issue
    } = caseProps;
    
    const { NEED_LMI } = situation;
    
    let actionLines: string[] = [];

    if (NEED_LMI) {
        actionLines.push('LMI');
    }

    Object.keys(actions).forEach((action) => {
        actionLines.push(actionsDict[action]);
    });

    let solved: boolean | null = null;

    Object.entries(actions).forEach(([action, value]) => {
        if (value === true) {
            solved = true;
        } else if (value === false) {
            solved = false;
        }
    });

    if (solved === true) {
        const solvedNote = issue.solvedNote || 'solved.';
        actionLines.push(solvedNote);
    } else if (solved === false) {
        actionLines.push('- Same.');
    }

    return actionLines.join("\n");
}

export default writeActions;
