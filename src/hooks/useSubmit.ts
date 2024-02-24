import { useSelector } from "react-redux";
import clipboardCopy from 'clipboard-copy';

interface HookResult {
    submit: () => void;
}

const useSubmit = (): HookResult => {

    const { problemDesc, ts, resolution  } = useSelector((state: any) => state.case.note)
    
    const fileds: {[key: string]: string}[] = [
        {
            name: "Problem Description",
            value: problemDesc
        },
        {
            name: "How to reproduce the faliure",
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
        }
    ]

    const submit = async () => {



        const note: string = fileds.reduce( (acc: string, field: {[key: string]: string}) => {
            return acc + `|${field.name}: ${field.value}\n\n`
        }, "")

        const statusNote: string = '\n{START CASE SUMMERY}\n\n' + note + '{END CASE SUMMERY}\n'

        
        clipboardCopy(statusNote);
            
    }

    return {
        submit,
    }

};

export default useSubmit;
