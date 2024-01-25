import TsContainer from "./TsContainer";
import { useDispatch, useSelector } from "react-redux";
import { newCase } from "../store/reducers/caseSlice";


function MainPage(props) {
    const dispatch = useDispatch();
    const { cProduct, cPart ,cIssues} = useSelector((state) => state.case );
    
    return (
        <div className="main-page d-flex w-100">
            <div className="left-panel">
            </div>
            <div className="center-panel w-2">
            <div className="btn btn-primary" onClick={() => dispatch(newCase())}>New Case</div>
                <TsContainer />
            </div>
            <div className="right-panel">
            
            </div>
        </div>
    );
}

export default MainPage;