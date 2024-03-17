import React from "react";
import { useSelector } from "react-redux";
import Options from "../Product/Options";
import Ts from "./Ts";
import CustomTs from "../Resolution/CustomTs";
import ResolutionPage from "../Resolution/ResolutionPage";
import SettingsPage from "../Settings/SettingsPage";
import Navigator from "./Navigator";
import TextPage from "../TextPage/TextPage";
import ConsumerTemplate from "../ConsumerTemplate/ConsumerTemplate";
import Tools from "../tools/Tools";
import Donate from "../Donate/Donate";
import MNRPage from "../Mnr/MNRPage";
// import MnrTool from "../MNR/MnrTool";

function TsContainer() {
    const { navigation, history } = useSelector((state: any) => state.case);

    const identifyIssueNavs: string[] = ['products', 'parts', 'issues', 'subparts'];
    const tsNavs: string[] = ['ts'];
    const customNavs: string[] = ['res', 'products'];
    const showNavigator: string[] = ['products', 'parts', 'issues', 'subparts', 'ts'];

    const pages: any[] = [
        { dependancy: showNavigator, element: <Navigator /> },
        { dependancy: identifyIssueNavs, element: <Options /> },
        { dependancy: tsNavs, element: <Ts /> },
        { dependancy: customNavs, element: <CustomTs /> },
        { dependancy: ['res'], element: <ResolutionPage /> },
        { dependancy: ['settings'], element: <SettingsPage /> },
        { dependancy: ['notePage'], element: <TextPage /> },
        { dependancy: ['tools'], element: <Tools /> },
        { dependancy: ['mnr'], element: <MNRPage /> },
        { dependancy: ['donate'], element: <Donate /> },
        { dependancy: ['consumerTemplate'], element: <ConsumerTemplate /> },
    ];

    return (
        <div className="ts-container d-flex flex-column">
            {pages.map((page, index) => page.dependancy.includes(navigation) && (
                <React.Fragment key={index}>
                    {page.element}
                </React.Fragment>
            ))}
        </div>
    );
}

export default TsContainer;
