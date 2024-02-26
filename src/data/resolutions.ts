import { Resolution } from "../lib/interfaces";
import resolutionsDependancies from "./dependancies/resolutionsDependancies";

const resolutions: Resolution[] = [
    {   desc: "Started System Test",
        note: 'Started extensive system test.',
        dependancies: resolutionsDependancies.needToStartSystemTest
    },
    {   desc: "Started hard drive test",
        note: 'Started hard drive test.',
        dependancies: resolutionsDependancies.needToStartHardDriveTest
    },
    {   desc: "Customer will call back to format",
        note: 'The customer will call back to format.',
        
        dependancies: resolutionsDependancies.needToFormat
    },
    {   desc: "Started Windows on DOK",
        note: 'Started to download Windows on DOK,\nnext step format.',
        dependancies: resolutionsDependancies.needToFormat
    },
    {   desc: "Close case",
        note: 'Closing case.',
        dependancies: resolutionsDependancies.needToCloseCase
    },
    {   desc: "Keep open for follow up",
        note: 'Keep open for follow up.',
        dependancies: resolutionsDependancies.needFollowUp
    },
    {   desc: "Referred to Labs",
        note: 'Referred to Labs.',
        dependancies: resolutionsDependancies.needToReferToLabs
    },
    {   desc: "Asked for picture on email",
        note: 'Asked for picture/video on email.',
        dependancies: resolutionsDependancies.needPictureOnEmail
    },
    {   desc: "Reffered to ISP",
        note: "Told the customer that the issue is in the network and not in the computer.",
        dependancies: resolutionsDependancies.networkIssue
    },
    {   desc: "Battery is ok",
        note: "I explained to the customer that the Battery capacity is ok and it might be a software issue.",
        dependancies: resolutionsDependancies.batteryIsOk
    },
]

export default resolutions;