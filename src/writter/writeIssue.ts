import { CaseProps } from "../lib/interfaces";

const writeIssue = ({ issue, part }: CaseProps): string => {
    const { frequency: f } = issue;
    
    if (!issue.desc) {
        return '';
    }
    
    const addFrequency: boolean = f?.desc ? true : false;
    const frequency = addFrequency ? ` ${f.desc.toLowerCase()}` : '';

    const overture = 'The ';
    const issueDesc = issue.desc.toLowerCase();


    const partDef = part.note ? `${part.note}` : `${overture}${part.desc}`;
    const verb = part.plural ? 'are' : 'is';
    const note = `${partDef} ${verb} ${issueDesc}${frequency}.`;

    return issue.note ? `${issue.note}${addFrequency ? frequency : ''}.` : note;
};

export default writeIssue;
