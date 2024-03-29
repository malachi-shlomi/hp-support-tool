const checkDict: { [key: string]: string } = {
    DIAGS_FAILED: 'Test in diagnostics - failed',
    DIAGS_PASSED: 'Test in diagnostics - passed',
    CHARGER_SAME: 'Other charger - same',
    CHARGER_WORKS: 'Other charger - works,\nthe issue is in the charger',
    DH_CHARGER: 'The customer doesn\'t have another charger',
    EXT_DIS_SAME: 'External display - same',
    EXT_DIS_WORK: 'External display - works',
    DH_EXT_DIS: 'The customer doesn\'t have external display',
    BIOS_SAME: 'In BIOS - same',
    BIOS_WORK: 'In BIOS - works good',
    PA_SAME: 'Another Power Adapter - same',
    PA_WORK: 'Another Power Adapter - works',
    DH_PA: 'The customer doesn\'t have another Power Adapter',
    EXT_KB_SAME: 'External keyboard - same',
    EXT_KB_WORK: 'External keyboard - works',
    DH_EXT_KB: 'The customer doesn\'t have external keyboard',
    EXT_MS_SAME: 'External mouse - same',
    EXT_MS_WORK: 'External mouse - works',
    DH_EXT_MS: 'The customer doesn\'t have external mouse',
    PL_OFF: 'No power light',
    PL_ON: 'The power light is on - but no display',
    CL_OFF: 'No charging light',
    CL_ON: 'Charging light is on',
    ANOTHER_PC_SAME: 'Another PC - same',
    ANOTHER_PC_WORK: 'Another PC - works',
    DH_ANOTHER_PC: 'The customer doesn\'t have another PC',
    OTHER_CABLES_SAME: 'Other cables - same',
    OTHER_CABLES_WORK: 'With other cables - works',
    DH_OTHER_CABLES: 'Doesn\'t have other cables to try',
    CAMERA_APP_SAME: 'Also in the Camera app',
    CAMERA_APP_WORK: 'In the Camera app - working',
    ANOTHER_NET_SAME: 'Different network - same',
    ANOTHER_NET_WORK: 'Different network - works',
    F2_QUICK_FAILED: 'F2 Quick Test - failed',
    F2_QUICK_PASSED: 'F2 Quick Test - passed,\nNeed to reinstall Windows'
}

export default checkDict;