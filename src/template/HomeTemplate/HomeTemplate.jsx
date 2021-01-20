import React from 'react';
import Select from '../../components/select/select';
import Schedule from '../../components/schedule/Schedule';

const HomTemplate = ({select, handlerSelect, bitcoin, stateName}) => {

    return (
        <div>
            <Select
                select={select}
                handlerSelect={handlerSelect}
            />
            <Schedule 
                cryptoCuracy={bitcoin}
                stateName={stateName}
            />
        </div>
    );
};

export default HomTemplate;