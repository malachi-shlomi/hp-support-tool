import { useSelector } from "react-redux";
import { Issue, Part, PartIssue } from "../lib/interfaces";
import issues from "../data/issues";
import parts from "../data/parts";
import partIssues from "../data/partIssues";

interface HookResult {
  parts: Part[];
  issues: Issue[];
}

const useIssues = (): HookResult => {
  const { nav, cProduct, cPart, caseProps } = useSelector((state: any) => state.case);

  if (nav === "parts") {
    const productIssues = issues.filter((issue: Issue) => issue.productDependancies.every(dependancy => caseProps[dependancy]) && issue.showInMainPage);

    const productParts = parts.filter((part: Part) => {
      return part.productDependancies.every(dependency => caseProps[dependency]);
    });

    return { issues: productIssues, parts: productParts };
  }

  if (nav === "issues") {
    const issuesOfPart = issues.filter((issue: Issue) => cPart.issues.includes(issue.id));
    return { issues: issuesOfPart, parts: [] };
  }

  return { issues: [], parts: [] };
};

export default useIssues;
