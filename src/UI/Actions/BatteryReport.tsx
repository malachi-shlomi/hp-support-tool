import React from 'react';
import useBattery from '../../hooks/useBattery';
import BatteryLine from '../BatteryReport/BatteryLine';
import TextCopyBox from '../System/TextCopyBox';

const BatteryReport: React.FC = () => {
    const {
        current,
        design,
        setCurrent,
        setDesign,
        batteryPercentage
    } = useBattery();

    return (
        <div className='d-flex flex-column gap-4'>
            <div className='buttons-title'>Battery Report</div>
            <TextCopyBox text="powercfg /batteryreport" />
            <div className='d-flex w-100 gap-4 align-items-end'>
                <div className='d-flex flex-column gap-1'>
                    <div className='text-secondary'>Battery Capacity</div>
                    <input
                        type='number' 
                        className='input border rounded py-2 px-3'
                        onChange={ (e) => setCurrent(e.target.value) }
                        value={ current ? current : '' }
                    />
                </div>
                <div className='text-secondary py-2' style={ { fontSize: '20px' }}>/</div>
                <div className='d-flex flex-column gap-1'>
                    <div className='text-secondary'>Design Capacity</div>
                    <input
                        type='number'
                        className='input border rounded py-2 px-3'
                        onChange={ (e) => setDesign(e.target.value) }
                        value={ design ? design : '' }
                    />
                </div>
            </div>
            <BatteryLine batteryPercentage={ batteryPercentage } />
        </div>
    );
};

export default BatteryReport;