import { useSelector } from "react-redux";
import { Issue, Part, PartIssue } from "../lib/interfaces";
import {issues, partIssues} from "../data/issues";
import parts from "../data/parts";

interface HookResult {
  parts?: Part[];
  issues?: (Issue | PartIssue)[];
  subParts?: Part[];
}

const useIssues = (): HookResult => {
  const { caseProps, navigation } = useSelector((state: any) => state.case);
  const { product, part } = caseProps;

  if (navigation === "subparts") {       
    const subParts = part.subParts.filter((part: Part) => part.productDependancies.every(dependancy => product[dependancy]));
    return { subParts }
  }
  
  if (navigation === "parts") {

    const productIssues = issues.filter((issue: Issue) => issue.productDependancies?.every(dependancy => product[dependancy]));

    const productParts = parts.filter((part: Part) => part.productDependancies.every(dependancy => product[dependancy]));
    
    return {issues: productIssues, parts: productParts };
  }

  if (navigation === "issues") {
    
    const issuesOfPart = partIssues.filter((issue: Issue) => issue.partDependancies?.every(dependancy => part[dependancy]));
    return { issues: issuesOfPart };
  }

  return { };
};

export default useIssues;
