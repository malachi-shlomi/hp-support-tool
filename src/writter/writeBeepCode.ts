import { CaseProps } from "../lib/interfaces";

const writeBeepCode: (caseProps: CaseProps) => string = (caseProps) => {
    const {
        error,
        red,
        white
    } = caseProps.beepCode;

    const beepCodeText = `Beep Code:
${red} long ${white} short
(${error})`

    return beepCodeText;
}   

export default writeBeepCode;