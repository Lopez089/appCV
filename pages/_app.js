import 'bootstrap/dist/css/bootstrap.min.css';
import {initiallizeFireBase} from '../service/firebase/initialFireBase'

initiallizeFireBase()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
