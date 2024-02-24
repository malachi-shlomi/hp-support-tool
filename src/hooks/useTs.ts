import { useSelector } from "react-redux";
import { Check, Action, Resolution } from "../lib/interfaces";
import checks from "../data/checks";
import actions from "../data/actions";
import resoutions from "../data/resolutions";

interface HookResult {
  checks: Check[];
  actions: Action[];
  resolutions: Resolution[];
  needAPicture: boolean;
  askForFrequency: boolean;
  needToGetBatteryReport: boolean;
  needToGetBeepCode: boolean;
  needToGetErrorMessage: boolean;
}

const useTs = (): HookResult => {
  const { caseProps } = useSelector((state: any) => state.case);
  const { issue, product, checks: checksState, actions: actionsState } = caseProps

  const checksOfIssue: Check[] = checks.filter((check: Check) => {
    return check.dependancies(caseProps)
  }).map((check: Check) => {
    return {
      ...check,
      options: [...check.options].map(option => {
        return {
          ...option,
          checked: checksState[check.code] === option.code
        }
      })
    }
  });
  
  const relevantActinos: Action[] = actions.filter((action: Action) => {
    return action.dependancies(caseProps)
  })

  const resolutions: Resolution[] = resoutions.filter((resolution: Resolution) => {
    return resolution.dependancies(caseProps)
  });

  const needAPicture: boolean = issue.possibleSolutions.includes('getPicture')
  
  const askForFrequency: boolean = issue.possibleSolutions.includes('checkFrequency');

  const needToGetBatteryReport: boolean = issue.possibleSolutions.includes('getBatteryReport');

  const needToGetBeepCode: boolean = issue.possibleSolutions.includes('getBeepCode') && product.hasBeepCode;

  const needToGetErrorMessage: boolean = issue.possibleSolutions.includes('getErrorMessage');

  return { 
    checks: checksOfIssue,
    actions: relevantActinos,
    resolutions,
    needAPicture, 
    askForFrequency, 
    needToGetBatteryReport,
    needToGetBeepCode,
    needToGetErrorMessage
  }

};

export default useTs;
