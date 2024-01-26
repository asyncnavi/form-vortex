import { PrimeReactProvider } from 'primereact/api';
import { FC } from 'react';

type AppProps = {
    Component : React.ComponentType<unknown>
    pageProps : object
}

const MyApp : FC<AppProps> =  ({ Component, pageProps }) => {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}

export default MyApp