import { useSelector } from "react-redux";
import { Check, Dependency } from "../lib/interfaces";
import checks from "../data/checks";

interface HookResult {
  checks: Check[];
  needAPicture: boolean;
}

const useTs = (): HookResult => {
  const { caseProps } = useSelector((state: any) => state.case);
  
  const checksOfIssue: Check[] = checks.filter((check: Check) => {
    return check.dependancies(caseProps)
  });

  const needAPicture: boolean = caseProps.needAPicture
  
  return { checks: checksOfIssue, needAPicture }

};

export default useTs;
