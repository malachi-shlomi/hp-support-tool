import { useDispatch, useSelector } from "react-redux";
import { setBatteryCurrentCapacity, setBatteryDesignCapacity, setSituation } from "../store/reducers/caseSlice";
import { useEffect } from "react";

interface HookResult {
  setCurrent: (value: string | null) => void;
  setDesign: (value: string | null) => void;
  current: string | null;
  design: string | null;
  batteryPercentage: number;
}

const useBattery = (): HookResult => {
    const dispatch = useDispatch();
    const { current, design } = useSelector((state: any) => state.case.caseProps.batteryCapacity);

    const setCurrent = (value: string | null) => {
        dispatch(setBatteryCurrentCapacity(value));
    };

    const setDesign = (value: string | null) => {
        dispatch(setBatteryDesignCapacity(value));
    };

    const currentC = Number(current);
    const designC = Number(design);

    
    let batteryPercentage = (currentC / designC * 100).toFixed(1) as unknown as number

    
    if (batteryPercentage >= 100) {
        batteryPercentage = 100;
    }

    const validReport:boolean = isNaN(currentC) || isNaN(designC) || current === "" || design === "" || current === null || design === null;

    useEffect(() => {
        dispatch(setSituation({
            batteryPercentage: validReport ? null : batteryPercentage,
        }));
    }, [batteryPercentage]);
    
    return {
        current,
        design,
        setCurrent,
        setDesign,
        batteryPercentage: validReport ? 0 : batteryPercentage,
    };
    
};

export default useBattery;
