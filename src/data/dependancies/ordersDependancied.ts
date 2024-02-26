import { Dependacy } from "../../lib/interfaces";

const ordersDependancies: { [key: string]: Dependacy } = {
    motherboard: ({ situation, checks, product, part}) => {

        if (situation.ISSUE_SOLVED || situation.NEED_FOLLOW_UP || !product.isAComputer) {
            return false
        }

        const { productName } = product;

        const portIssue: boolean = (
            (['All the ports', 'USB', 'HDMI', 'Type-C', 'Display Ports','Network Port'].includes(part.desc)) && 
            !situation.BAD_CABLES && 
            situation.HARDWARE_ISSUE !== false &&
            product.isAComputer
        )

        const turnOnIssue: boolean = (
            ( productName === 'Laptop' && situation.BAD_CHARGER === false && situation.PC_DOESNT_TURN_ON) ||
            ( productName === 'Desktop' && situation.PC_DOESNT_TURN_ON) || 
            ( productName === 'Mini' && situation.BAD_PA === false && situation.PC_DOESNT_TURN_ON)
        )      

        return portIssue || turnOnIssue;
    },
    disk: (caseProps) => {
        const { situation } = caseProps;

        return situation.BAD_DISK;
    },
    screen: ({ product, part, situation }) => {
        return (
            product.hasScreen &&
            product.isAComputer &&
            part.desc === 'Screen' && 
            situation.HARDWARE_ISSUE
        )
    },
    powerAdapter: ({ product, situation }) => {
        return (
            situation.BAD_PA
        )
    },
    charger: ({ product, situation }) => {
        return (
            product.hasCharger && 
            situation.BAD_CHARGER === true || situation.BAD_CHARGER === null
        )
    },
    keyboard: ({  situation, part }) => {
        return (
            part.desc === 'Keyboard' && 
            situation.HARDWARE_ISSUE
        )
    },
    ram: ({  beepCode }) => {
        const { red, white } = beepCode;
        return red === "3" && white === "2"
    },
    monitor: ({  situation, product }) => {
        return (
            product.productName === 'Monitor' && 
            !situation.BAD_CABLES && 
            situation.HARDWARE_ISSUE !== false &&
            !situation.NEED_FOLLOW_UP
        )
    },
    battery: ({ situation, issue }) => {
        const lowCapacity:boolean = (
            situation.batteryPercentage &&
            situation.batteryPercentage < 94
        );
        const inflated = issue.desc === 'Inflated';

        return lowCapacity || inflated;
    },
    touchpad: ({  situation, part }) => {
        return (
            part.desc === 'Touchpad' && 
            situation.HARDWARE_ISSUE
        )
    },
    speakers: ({ situation, part }) => {
        return (
            part.desc === 'Speakers' && 
            situation.HARDWARE_ISSUE
        )
    },
    psu: ({ situation, product, issue }) => {
        return (
            product.hasPsu &&
            situation.PC_DOESNT_TURN_ON
        )
    },
    fan: ({ situation, part }) => {
        return (
            part.desc === 'Fan' && 
            !situation.NEED_FOLLOW_UP
        )
    },
    wifiModule: ({ situation, part }) => {
        return (
            [
                'WI-FI',
                'Bluetooth'
            ].includes(part.desc) && 
            situation.HARDWARE_ISSUE
        )
    },
    microphone: ({ situation, part }) => {
        return (
            part.desc === 'Microphone' && 
            situation.HARDWARE_ISSUE
        )
    },
    camera: ({ situation, part, product }) => {
        return (
            part.desc === 'Camera' && 
            situation.ISSUE_IN_SPESIFIC_APP == false &&
            product.isAComputer
        )
    },
    dcin: ({ situation, issue }) => {
        return (
            issue.desc === "Doesn't Charge" && 
            (situation.BAD_CHARGER === false || situation.BAD_CHARGER === null)
        )
    },
}

export default ordersDependancies;