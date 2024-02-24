import { CaseProps } from "../lib/interfaces"
import writeResolution from "./writeResolution";
import writeTs from "./writeTs";

interface generatedNote {
    ts: string;
    resolution: string;
}

export const generateNote: (caseProps: CaseProps) => generatedNote = (caseProps) => {
    const ts = writeTs(caseProps);
    const resolution = writeResolution(caseProps);

    return {
        ts,
        resolution
    }
}

export default generateNote;