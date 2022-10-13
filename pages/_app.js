// `pages/_app.js`
import '../styles/global.css';
import 'normalize.css/normalize.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}