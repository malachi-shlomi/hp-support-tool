import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const BatteryLine: React.FC<{batteryPercentage: number}> = ({batteryPercentage}) => {

    const batteryColor = () => {
        if (batteryPercentage < 80) {
            return 'red';
        } else if (batteryPercentage < 90) {
            return 'yellow';
        } else {
            return 'green';
        }
    }

    const batteryColorStyle = {
        width: `${batteryPercentage}%`
    }

    const batteryColorClass = batteryColor();

    return (
        <div className='d-flex flex-column gap-1'>
            <div className='capacity-line w-75 rounded-pill border'>
                <div className='precentage-bar w-100 p-0 h-100'>
                    <div className={`precentage-bar-fill h-100 rounded-pill p-0 ${batteryColorClass}`} style={batteryColorStyle}></div>
                </div>
            </div>
            <div className='battery-precentage d-flex align-items-center gap-1'>
                <BsFillLightningChargeFill size={20}/>
                <div> {batteryPercentage}%</div>
            </div>
        </div>
    );
};

export default BatteryLine;