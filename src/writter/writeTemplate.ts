
const writeTemplate: (consTemplate: any) => string = (consTemplate) => {
    const {
        serviceType,
        problemDescription,
        actions,
        checks,
        actionsDesc,
        phoneNumber1,
        phoneNumber2,
        name,
        address,
        windowsVer,
        computerPassword
    } = consTemplate;

    const onlyOnePhoneNumber: boolean = phoneNumber1 && !phoneNumber2 || !phoneNumber1 && phoneNumber2;;

    return (
`Solution: ${serviceType}
Problem: ${problemDescription || 'N/A'}
${checks.length > 0 ? 'What was checked: '+ checks+ '\n' : ''}
${name ? name + '\n' : ''}
${phoneNumber1 ? phoneNumber1 + '\n' : ''}${phoneNumber2 ? phoneNumber2 + '\n' : ''}${onlyOnePhoneNumber ? 'אין מספר נוסף' + '\n' : ''}
${address ? address + '\n' : ''}
Data lose: Agreed
OS: ${windowsVer}
Password: ${computerPassword || 'N/A'}`
)
}   


export default writeTemplate;