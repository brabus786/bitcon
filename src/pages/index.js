import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/LayOut';
import HomTemplate from '../template/HomeTemplate/HomeTemplate';
import { select } from '../data/select';


export default function Home() {

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
      <Layout>
        <HomTemplate
          select={stateSelect}
          handlerSelect={handlerSelect}
          bitcoin={selectorCryptoData.bitcoin}
          stateName={stateName}
        />
      </Layout>
    </div>
  )
}
