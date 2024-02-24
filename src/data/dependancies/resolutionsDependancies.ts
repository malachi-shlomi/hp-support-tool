import { Dependacy } from "../../lib/interfaces";

const resolutionsDependancies: { [key: string]: Dependacy } = {
    needToStartSystemTest: ({ issue, situation, product }) => {
        return (
            issue.possibleSolutions.includes('startSystemTest') &&
            product.isAComputer && 
            !situation.ISSUE_SOLVED &&
            !situation.HARDWARE_ISSUE &&
            !situation.NEED_FOLLOW_UP
        )
    },
    needToFormat: ({ issue, situation, product, part }) => {
        return (
            issue.possibleSolutions.includes('format') &&
            (part.canBeFixByFormat || !part.desc) && 
            !situation.ISSUE_SOLVED &&
            !situation.HARDWARE_ISSUE &&
            product.isAComputer &&
            situation.NEED_FOLLOW_UP !== true &&
            !situation.BAD_NETWORK
        )
    },
    needFollowUp: ({ situation }) => {
        return (
            situation.NEED_FOLLOW_UP &&
            !situation.HARDWARE_ISSUE
        )
    },
    needToStartHardDriveTest: ({ issue, product, situation }) => {
        return (
            issue.possibleSolutions.includes('startHardDriveTest') &&
            product.isAComputer &&
            !situation.ISSUE_SOLVED
        )
    },
    needToCloseCase: ({situation}) => {
        return situation.ISSUE_SOLVED;
    },
    needToReferToLabs: ({situation}) => {
        return situation.CID;
    },
    needPictureOnEmail: ({issue, pictureLink, situation}) => {
        return (
            issue.possibleSolutions.includes('getPicture') &&
            !pictureLink &&
            !situation.ISSUE_SOLVED
        )
    },
    networkIssue: ({situation, product}) => {
        return (
            situation.BAD_NETWORK
        )
    },
}

export default resolutionsDependancies;
