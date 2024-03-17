import { useSelector } from "react-redux";
import clipboardCopy from 'clipboard-copy';
import autoSubject from "../writter/autoSubject";
import { useDispatch } from "react-redux";
import { setIssue, setPD } from "../store/reducers/caseSlice";

interface HookResult {
    submit: () => void;
}

const useSubmit = (): HookResult => {

    const { problemDesc, ts, resolution  } = useSelector((state: any) => state.case.note)
    const dispatch = useDispatch();

    const submit = async () => {

        let autoPD = null
        if (!problemDesc) {
            autoPD = autoSubject({ troubleshooting: ts, resolution })
        }
        
        const fileds: {[key: string]: string}[] = [
            {
                name: "Problem Description",
                value: problemDesc !== '' ? problemDesc : autoPD
            },
            {
                name: "How to reproduce the failure",
                value: 'N/A'
            },
            {
                name: "Error message",
                value: 'N/A'
            },
            {
                name: "UEFI",
                value: 'N/A'
            },
            {
                name: "Wise Link",
                value: 'N/A'
            },
            {
                name: "Troubleshooting",
                value: ts
            },
            {
                name: "Resolution",
                value: resolution
            },
            {
                name: "Leave blank",
                value: ''
            },
    
        ]
    
        const note: string = fileds.reduce( (acc: string, field: {[key: string]: string}) => {
            return acc + `|${field.name}: ${field.value}\n\n`
        }, "")

        const statusNote: string = '\n{START CASE SUMMERY}\n\n' + note + '{END CASE SUMMERY}\n\n'

        
        clipboardCopy(statusNote);
            
    }

    return {
        submit,
    }

};

export default useSubmit;
