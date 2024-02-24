import { CaseProps } from "../lib/interfaces";

const writeLink: (caseProps: CaseProps) => string = (caseProps) => {
    const { pictureLink } = caseProps;
    const { CID } = caseProps.situation;
    
    return `Link for a picture/video from the customer:
${pictureLink}
${CID ? "Customer Damage." : ""}`
    
}   

export default writeLink;