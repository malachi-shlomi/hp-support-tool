export interface Item {
    title: string,
    value: string
}

export interface CategoryItem {
    title: string,
    items: Item[],
    copy?: boolean
}

const categories: CategoryItem[] = [
    {
        title: 'Phone Numbers',
        items: [
            {
                title: 'Microsoft',
                value: '097-625-400'
            },
            {
                title: 'DCS',
                value: '03-959-6666'
            },
            {
                title: 'ZIPCOM',
                value: '03-919-6196'
            },
            {
                title: 'DORCOM',
                value: '03-925-0150'
            },
            {
                title: 'HP Support',
                value: '09-830-4848'
            }
        ],
        copy: false
    },
    {
        title: 'Extensions',
        items: [
            {
                title: 'מענה ראשוני',
                value: 'CS_EM_NET_IL_ConsPrint_HEB_SVC_XFR'
            },
            {
                title: 'מדפסות ביתי',
                value: 'CS_EM_NET_IL_Cons_CETeam_HEB_SVC_XFR'
            }
        ],
        copy: true
    },
    {
        title: 'Links',
        items: [
            {
                title: 'Rapid Storage 11',
                value: 'https://ftp.hp.com/pub/softpaq/sp136501-137000/sp136624.exe'
            },
            {
                title: 'Rapid Storage 12',
                value: 'https://ftp.hp.com/pub/softpaq/sp139501-140000/sp139867.exe'
            },
            
        ],
        copy: true
    }
]

export default categories;