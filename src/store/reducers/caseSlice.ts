import { createSlice } from '@reduxjs/toolkit';

interface CaseProps {
    product:   {[key: string]: any};
    issue:     {[key: string]: any};
    part:      {[key: string]: any};
    checks:    {[key: string]: any};
    situation: {[key: string]: any};
    pictureLink: string | null;
}

interface CaseState {
    nav: string;
    caseProps: CaseProps;
}

const initialState: CaseState = {
    nav: 'products',
    caseProps: {
        product: {},
        issue: {},
        part: {},
        checks: {},
        situation: {},
        pictureLink: null
    },
    
};

const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.caseProps = {...state.caseProps, ...action.payload}
            state.nav = 'parts'
        },
        setIssue: (state, action) => {            
            state.caseProps = {...state.caseProps, ...action.payload.effects}
            state.caseProps.issues.push({id: action.payload.id, desc: action.payload.desc});
            state.nav = 'ts';
        },
        setPart: (state, action) => {
            state.cPart = action.payload;
            state.nav = 'issues';
        },
        setPicLink: (state, action) => {
            state.caseProps.pictureLink = action.payload;
        },
        newCase: (state) => {
            
        }

    },
});

export const { setProduct, setIssue, setPart, newCase } = caseSlice.actions;

export default caseSlice.reducer;
