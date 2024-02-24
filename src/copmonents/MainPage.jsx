import TsContainer from "./TsContainer";
import SideMenu from "./SideMenu/SideMenu";
import GoBackArrow from "./GoBackArrow";
import { useSelector } from "react-redux";

function MainPage() {
    const { history } = useSelector((state) => state.case);

    return (
        <div className="main-page d-flex">
            <div className="content-panel left-panel">
                <SideMenu />
            </div>
            <div className="center-panel content-panel">
                {history.length > 0 && <GoBackArrow />}
                <div className="content-center">
                    <TsContainer />
                </div>
            </div>
        </div>
    );
}

export default MainPage;