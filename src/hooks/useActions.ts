import { useSelector } from "react-redux";
import { Action } from "../lib/interfaces";
import actions from "../data/actions";

interface HookResult {
  actions: Action[];
}

const useActions = (): HookResult => {
  const { caseProps } = useSelector((state: any) => state.case);
  const { actions: actionsState } = caseProps;

  const relevantActinos: Action[] = actions.filter((action: Action) => {
    return action.dependancies(caseProps)
  }).map((action: Action) => {
    return {
      ...action,
      state: actionsState[action.code],
    }
  });

  return { actions: relevantActinos }

};

export default useActions;
