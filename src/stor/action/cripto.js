import * as actionType from './actionTypes';
import axios from 'axios';


export const getBitcoinData = (data) => ({ type: actionType.GET_BITCOIN, data });
export const getEthereumData = (data) => ({ type: actionType.GET_ETHEREUM, data });

export const getBitcoin = () => {
    try {
        return async (dispatch, getState) => {
            const { bitcoin, ethereum } = getState().getCryptoReducer;

            const bitcoinData = bitcoin === null && await axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=100');
            const ethereumData = ethereum === null && await axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=100');
            bitcoinData.status === 200 && dispatch(getBitcoinData(bitcoinData.data.Data));
            ethereumData.status === 200 && dispatch(getEthereumData(ethereumData.data.Data));
        }
    } catch (e) {

    }

}




