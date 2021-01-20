import React from 'react';
import Select from '../../components/select/select';
import Schedule from '../../components/schedule/Schedule';

const EthereumTemplate = ({select, handlerSelect, bitcoin, stateName}) => {
    return(
        <div>
            <Select
                select={select}
                handlerSelect={handlerSelect}
            />
            <Schedule 
                cryptoCuracy={bitcoin}
                stateName={stateName}
                ethereum
            />
        </div>
    );
};

export default EthereumTemplate;