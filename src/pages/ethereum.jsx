import React, { useState, useEffect } from 'react';
import LayOut from '../components/layout/LayOut';
import EthereumTemplate from '../template/EthereumTemplate/EthereumTemplate';
import { useSelector } from 'react-redux';
import { select } from '../data/select';


const Ethereum = () => {

    const [stateSelect, setStateSelect] = useState(select);
    const [stateName, setStateName] = useState('');
    const selectorCryptoData = useSelector(state => state.getCryptoReducer);


    const handlerSelect = (name) => {
        setStateName(name);
        const newState = [...stateSelect];
        const select = newState.map((data) => {
            data.name === name ? data.active = true : data.active = false;
            return data;
        });
        setStateSelect(select);
    }

    useEffect(() => {
        selectorCryptoData.bitcoin && handlerSelect('all');
    }, [selectorCryptoData.bitcoin]);

    return (
        <div>
            <LayOut>
                <EthereumTemplate
                    select={stateSelect}
                    handlerSelect={handlerSelect}
                    bitcoin={selectorCryptoData.ethereum}
                    stateName={stateName}
                />
            </LayOut>
        </div>
    );
};

export default Ethereum;