import { useSelector } from "react-redux";
import Options from "./Options";
import Ts from "./Ts";

function TsContainer() {
    const { nav } = useSelector((state: any) => state.case);

    const identifyIssueNavs: string[] = ['products', 'parts', 'issues']
    const tsNavs: string[] = ['ts']

    return (
        <div className="ts-container">
            {identifyIssueNavs.includes(nav) && <Options />}
            {tsNavs.includes(nav) && <Ts />}
        </div>
    );
}

export default TsContainer;