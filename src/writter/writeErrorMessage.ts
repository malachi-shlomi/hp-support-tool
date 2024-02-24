import { CaseProps } from "../lib/interfaces";

const writeErrorMesssage: (caseProps: CaseProps) => string | undefined = (caseProps) => {
    const { errorMessage } = caseProps;

    if (!errorMessage) return;

    const errorMessageNote = 
`Error message: "${errorMessage}"`

    return errorMessageNote;
}

export default writeErrorMesssage;
