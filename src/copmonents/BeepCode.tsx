import { useState } from 'react';
import beepCodes from '../data/beepCodes';
import { useDispatch } from 'react-redux';
import { setBeepCode } from '../store/reducers/caseSlice';
import { useSelector } from 'react-redux';

const BeepCode = () => {
    const [redCount, setRedCount] = useState<string | null>(null)
    const [whiteCount, setWhiteCount] = useState<string | null>(null)
    const dispatch = useDispatch()
    
    const {
        error
    } = useSelector((state: any) => state.case.caseProps.beepCode)

    const redLights = Object.keys(beepCodes)

    const whiteLights: string[] = redCount ? Object.keys(beepCodes[redCount]) : []

    const setRed = (redLight: string) => {
        if (redCount === redLight) {
            setRedCount(null)
        } else {
            setRedCount(redLight)
        }
        setWhiteCount(null)
        dispatch(setBeepCode({}))
    }

    const setWhite = (whiteLight: string) => {

        if (whiteLight === whiteCount || !redCount) {
            setWhiteCount(null)
            dispatch(setBeepCode({}))
        } else {
            setWhiteCount(whiteLight)
            dispatch(setBeepCode({
                error: beepCodes[redCount][whiteLight].error,
                red: redCount,
                white: whiteLight
            }))
        }

    }


    return (
        <div className='d-flex flex-column gap-2'>
            <div className='sub-titile'>
                Beep Code
            </div>
            <div className='d-flex flex-column gap-1'>
                <div className='text-muted'>
                    Long Beeps 
                </div>
                <div className='d-flex gap-2'>
                    {redLights.map(redLight => (
                        <div key={redLight} 
                            className={`rounded-pill border px-4 py-1 pointer ${redCount === redLight ? 'bg-primary text-white' : ''}`} 
                            onClick={() => setRed(redLight)}
                        >
                            {redLight}
                        </div>
                    ))}
                </div>
            </div>
            {whiteLights.length > 0 && (
                <div className='d-flex flex-column gap-1'>
                <div className='text-muted'>
                    Short Beeps    
                </div>
                <div className='d-flex gap-2'>
                    {whiteLights.map(whiteLight => (
                        <div key={whiteLight} 
                            className={`rounded-pill border px-4 py-1 pointer ${whiteLight === whiteCount ? 'bg-primary text-white' : ''}`} 
                            onClick={() => setWhite(whiteLight)}
                        >
                            {whiteLight}
                        </div>
                    ))}
                </div>
            </div>
            )}
            {error && (
                <div className='py-1'>

                    <div className='text-bold'>
                        {error}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BeepCode;