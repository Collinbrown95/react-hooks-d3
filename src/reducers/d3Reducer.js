/**
 * The reducer for d3 state and actions.
 * @param {*} state 
 * @param {*} action 
 * 
 * Action Types:
 * 
 * SET_DATA_IDENTITY:
 *      Keeps track of the identity for d3 data objects. This is used internally
 *      by d3 when mapping DOM elements to data.
 * 
 * SET_TREECHART_ROOT:
 *      Sets the root node of the data that TreeChart renders.
 */
export const d3Reducer = (state, action) => {
    switch(action.type) {
        case "SET_DATA_IDENTITY":
            const dataIdentity = state.dataIdentity + 1;
            return {
                ...state,
                dataIdentity
            };
        // TODO: resetting the root should also clear the state for things like (1) search path etc.
        case "SET_TREECHART_ROOT":
            return {
                ...state,
                dataRoot: action.dataRoot,
                nodeExpansionPath: action.nodeExpansionPath ? action.nodeExpansionPath : null,
            };
        case "SET_EMPLOYEE_SEARCH_RESULTS":
            return {
                ...state,
                employeeSearchResults: action.employeeSearchResults
            };
        case "SET_TOOLTIP_COORDINATES":
            return {
                ...state,
                tooltipCoordinates: action.tooltipCoordinates,
            }

        default:
            return state;
    }
}