import * as actionTypes from '../action/actionTypes';

const initialState = {
    bitcoin: null,
    ethereum: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_BITCOIN:
            state = {
                ...state,
                bitcoin:action.data,
            }
            break;
        case actionTypes.GET_ETHEREUM:
            state = {
                ...state,
                ethereum:action.data,
            }
            break;
        default:
            return state;    
    }
   

    return state;
};

export default reducer;