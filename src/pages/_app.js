import { createWrapper } from 'next-redux-wrapper';
import initStore from '../stor/index';
import { getBitcoin } from '../stor/action/cripto';
import '../assets/styles/globals.css';
import { useDispatch } from 'react-redux';

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch()

  dispatch(getBitcoin());
  return <Component {...pageProps} />
}


export const wrapper = createWrapper(initStore, { debug: true });
export default wrapper.withRedux(MyApp);