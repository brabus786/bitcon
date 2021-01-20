import { combineReducers } from 'redux';
import getCryptoReducer from './getCryptoReducer';

const rootReducer = combineReducers({
    getCryptoReducer,
});

export default rootReducer;