import { Order } from "../lib/interfaces";
import ordersDependancies from "./dependancies/ordersDependancied";

const orders: Order[] = [
    {   desc: 'Open call for MB',
        dependancies: ordersDependancies.motherboard
    },
    {   desc: 'Open call for Hard Disk',
        dependancies: ordersDependancies.disk
    },
    {   desc: 'Open call for Screen',
        dependancies: ordersDependancies.screen
    },
    {   desc: 'Open CSR for Power Adapter',
        dependancies: ordersDependancies.powerAdapter
    },
    {   desc: 'Open CSR for Charger',
        dependancies: ordersDependancies.charger
    },
    {   desc: 'Open call for Keyboard',
        dependancies: ordersDependancies.keyboard
    },
    {   desc: 'Open call for RAM',
        dependancies: ordersDependancies.ram
    },
    {   desc: 'Open CSR for Monitor',
        dependancies: ordersDependancies.monitor
    },
    {   desc: 'Open call for Battery',
        dependancies: ordersDependancies.battery
    },
    {   desc: 'Open call for Touchpad',
        dependancies: ordersDependancies.touchpad
    },
    {   desc: 'Open call for Speakers',
        dependancies: ordersDependancies.speakers
    },
    {   desc: 'Open call for PSU',
        dependancies: ordersDependancies.psu
    },
    {   desc: 'Open call for Fan',
        dependancies: ordersDependancies.fan
    },
    {   desc: 'Open call for WI-FI module',
        dependancies: ordersDependancies.wifiModule
    },
    {   desc: 'Open call for Microphone',
        dependancies: ordersDependancies.microphone
    },
    {   desc: 'Open call for Camera',
        dependancies: ordersDependancies.camera
    },
    {   desc: 'Open call for DC-In',
        dependancies: ordersDependancies.dcin
    },
    
]

export default orders;