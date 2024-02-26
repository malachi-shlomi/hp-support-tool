import { createSlice, current } from '@reduxjs/toolkit';
import { CaseProps, Frequency } from '../../lib/interfaces'
import writeTs from '../../writter/writeTs';
import writeTemplate from '../../writter/writeTemplate';
import writeIssue from '../../writter/writeIssue';
import writeChecks from '../../writter/writeChecks';
import writeActions from '../../writter/writeActions';

interface CaseState {
    navigation: string;
    stickyNotes: {
        notes: {title: string, text: string}[]
        openIndex: number | null
    }
    note: {
        problemDesc: string,
        ts: string
        resolution: string,
    },
    consTemplate: {
        serviceType: 'Offsite' | 'Onsite' | null,
        problemDescription?: string,
        checks?: string,
        actions?: string,
        phoneNumber1?: string,
        phoneNumber2?: string,
        name?: string,
        address?: string,
        windowsVer: string,
        computerPassword?: string,
        [key: string]: any
    },
    caseProps: CaseProps;
    modalMessage: string | null;
    settings: {[key: string]: any},
    history?: {
        navigation?: string,
        note?: {
            problemDesc: string,
            ts: string
            resolution: string,
        }
        caseProps?: CaseProps,
    }[]
}

const initialState: CaseState = {
    navigation: 'products',
    stickyNotes: {
        notes: localStorage.getItem('stickyNotes') ? JSON.parse(localStorage.getItem('stickyNotes') || '') : [],
        openIndex: null
    },
    note: {
        problemDesc: '',
        ts: '',
        resolution: ''
    },
    consTemplate: {
        serviceType: 'Offsite',
        windowsVer: 'Windows 10'
    },
    caseProps: {
        product: {},
        issue: {},
        part: {},
        subPart: {},
        checks: {},
        actions: {},
        situation: {},
        pictureLink: null,
        batteryCapacity: {},
        beepCode: {},
        linkResultCode: null,
    },
    modalMessage: null,
    settings: {
        darkMode: localStorage.getItem('isLight') !== 'true'
    },
    history: []

};

const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {
        goBack: (state) => {
            const history = state.history
            const last = history?.pop();
            state.navigation = last?.navigation || 'products';
            state.caseProps = last?.caseProps || initialState.caseProps;
            state.note = last?.note || initialState.note;
            state.stickyNotes.openIndex = null;
            state.history = history;
        },
        setProduct: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            state.caseProps.product = action.payload;
            state.navigation = 'parts'
        },
        setPart: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            const part = action.payload;
            state.caseProps.part = part;

            if (part.subParts?.length) {  
                state.navigation = 'subparts';
            } else {
                state.navigation = 'issues';
            } 

            
        },
        setSubPart: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            state.caseProps.part = action.payload;
            state.navigation = 'issues';

        },
        setIssue: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            state.caseProps.issue = action.payload;       
            state.caseProps.situation = {...state.caseProps.situation, ...action.payload.effects}

            const partName = state.caseProps.part.desc;

            if (partName === undefined) {
                state.note.problemDesc = `${action.payload.desc}`;
            } else {
                state.note.problemDesc = `${partName} ${action.payload.desc}`;
            }

            state.navigation = 'ts';

        },
        setPictureLink: (state, action) => {
            state.caseProps.pictureLink = action.payload;
        },
        newCase: (state) => {
            state.caseProps = initialState.caseProps;
            state.navigation = 'products';
            state.note = initialState.note;
            state.consTemplate = initialState.consTemplate;
            state.history = [];
        },
        setChecks: (state, action) => {
            state.caseProps.checks = {...state.caseProps.checks, ...action.payload};
        },
        removeCheck: (state, action) => {
            delete state.caseProps.checks[action.payload];
        },
        setFrequency: (state, action: {payload: Frequency | undefined}) => {
            state.caseProps.issue.frequency = action.payload;
        },
        setAction: (state, action: {payload: {actions: string[], res: boolean | null}}) => {
            const {actions, res} = action.payload;

            state.caseProps.situation.ISSUE_SOLVED = res;

            actions.forEach(action => {
                state.caseProps.actions[action] = res;
            });

            state.caseProps.situation.NEED_FOLLOW_UP = [true, null].includes(res);

        },
        toggleAction: (state, action) => {
            const { actionDesc, isChecked, effects } = action.payload;
            delete state.caseProps.situation.ISSUE_SOLVED;
            if (isChecked) {
                state.caseProps.actions[actionDesc] = null;
                state.caseProps.situation = {...state.caseProps.situation, ...effects};
            } else {
                delete state.caseProps.actions[actionDesc]
                if (effects) {
                    Object.keys(effects).forEach(key => {
                        delete state.caseProps.situation[key];
                    });
                }
            }
        },
        setSituation: (state, action) => {
            
            state.caseProps.situation = {...state.caseProps.situation, ...action.payload};
        },
        removeSituation: (state, action) => {
            Object.keys(action.payload).forEach(key => {
                delete state.caseProps.situation[key];
            });
        },
        submitCase: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            const { resolution } = action.payload;
            const { ts }: { ts: string } = writeTs(current(state.caseProps));

            if (resolution){
                state.note.resolution = resolution;
            }
            state.note.ts = ts;
            state.navigation = 'res';
        },
        setPD: (state, action) => {
            state.note.problemDesc = action.payload;;
        },
        setTS: (state, action) => {
            
            state.note.ts = action.payload;;
        },
        setResolution: (state, action) => {
            state.note.resolution = action.payload;
            state.navigation = 'res';
        },
        setBatteryCurrentCapacity: (state, action) => {
            state.caseProps.batteryCapacity.current = action.payload;
        },
        setBatteryDesignCapacity: (state, action) => {
            state.caseProps.batteryCapacity.design = action.payload;
        },
        setBeepCode: (state, action) => {
            state.caseProps.beepCode = action.payload;
        },
        setNav: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            state.navigation = action.payload;
        },
        addStickyNote: (state) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            const noteTitle = `New Note`
            state.stickyNotes.notes.push({
                title: noteTitle,
                text: ''
            });

            // add to local storage ('stickyNotes) array
            localStorage.setItem('stickyNotes', JSON.stringify(state.stickyNotes.notes));
            state.stickyNotes.openIndex = state.stickyNotes.notes.length - 1;
            state.navigation = 'notePage';

        },
        openStickyNote: (state, action) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });
            
            const { index } = action.payload;
            
            if (state.stickyNotes.notes.length > index ) {
                state.stickyNotes.openIndex = index;
                state.navigation = 'notePage';
            } else {
                state.stickyNotes.openIndex = null;
                state.navigation = 'products';
            }
            
        },  
        closeStickyNote: (state) => {
            state.stickyNotes.openIndex = null;
        },
        removeStickyNote: (state, action) => {
            const { index } = action.payload;

            if (state.stickyNotes.openIndex === index) {
                state.caseProps = initialState.caseProps;
                state.navigation = 'products';
                state.note = initialState.note;
                state.consTemplate = initialState.consTemplate;
                state.history = [];
                state.stickyNotes.openIndex = null;
            };
            if (state.stickyNotes.openIndex !== null && state.stickyNotes.openIndex > index) {
                state.stickyNotes.openIndex -= 1;
            }

            state.stickyNotes.notes.splice(index, 1);
            localStorage.setItem('stickyNotes', JSON.stringify(state.stickyNotes.notes));

        },
        updateStickyNoteTitle: (state, action) => {
            const { index, title } = action.payload;
            if (state.stickyNotes.notes[index] ) {
                state.stickyNotes.notes[index].title = title;
            } else {
                state.stickyNotes.notes[index] = {
                    title: title,
                    text: ''
                };
            } 
            
            localStorage.setItem('stickyNotes', JSON.stringify(state.stickyNotes.notes));
        },
        updateStickyNoteText: (state, action) => {
            const { index, text } = action.payload;
            
            state.stickyNotes.notes[index].text = text;

            localStorage.setItem('stickyNotes', JSON.stringify(state.stickyNotes.notes));

        },
        setModalMessage: (state, action) => {
            state.modalMessage = action.payload;
        },
        setSettings: (state, action) => {
            state.settings = {...state.settings, ...action.payload};
        },
        setConsumerTemplate: (state, action) => {
            Object.keys(action.payload).forEach(key => {
                state.consTemplate[key] = action.payload[key];
            });
        },
        submitConsumerTemplate: (state) => {
            const consTemplate = state.consTemplate;
            
            const tempRes = writeTemplate(consTemplate)
            navigator.clipboard.writeText(tempRes);

            // state.note.resolution = tempRes;
        },
        openConsumerTemplate: (state) => {
            state.history?.push({
                navigation: state.navigation,
                caseProps: {...state.caseProps}
            });

            const problemsDesc = writeIssue(state.caseProps);
            const checksDesc = writeChecks(state.caseProps);

            if (problemsDesc.length > 0) {
                state.consTemplate.problemDescription = problemsDesc;
            }
            state.consTemplate.checks = checksDesc;

            state.navigation = 'consumerTemplate';
        },
        setErrorMessage: (state, action) => {
            state.caseProps.errorMessage = action.payload;
        },
        setLinkResultCode: (state, action) => {
            state.caseProps.linkResultCode = action.payload;
        },
    },
});

export const { 
    setProduct,
    setIssue, 
    setPart, 
    setSubPart,
    newCase, 
    setChecks,
    removeCheck,
    setAction, 
    setFrequency,
    setPictureLink,
    toggleAction,
    setSituation,
    submitCase,
    setPD,
    setTS,
    setResolution,
    setBatteryCurrentCapacity,
    setBatteryDesignCapacity,
    setBeepCode,
    setNav,
    openStickyNote,
    closeStickyNote,
    setModalMessage,
    addStickyNote,
    updateStickyNoteTitle,
    updateStickyNoteText,
    removeStickyNote,
    setSettings,
    goBack,
    removeSituation,
    setConsumerTemplate,
    submitConsumerTemplate,
    openConsumerTemplate,
    setErrorMessage,
    setLinkResultCode
} = caseSlice.actions;

export default caseSlice.reducer;
