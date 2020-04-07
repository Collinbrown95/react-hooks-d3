import React, { createContext, useReducer } from 'react';

import { d3Reducer } from "../reducers/d3Reducer";

import largeTreeDiagram from "../data/TreeChartData/treeWithSize";

// TODO: consider initialization function that sets the initial state.
const initialState = {
    dataIdentity: 0,
    dataRoot: largeTreeDiagram,
}

export const D3Context = createContext(initialState);

const D3ContextProvider = (props) => {
    const [d3State, dispatch] = useReducer(d3Reducer, initialState);

    return (
        <D3Context.Provider value={{d3State, dispatch}}>
            {props.children}
        </D3Context.Provider>
    )
}

export default D3ContextProvider;