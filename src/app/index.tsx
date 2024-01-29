import { PrimeReactProvider } from 'primereact/api';
import Header from '../components/header';
        

export default function App() {
    return (
        <PrimeReactProvider>
           <Header />
        </PrimeReactProvider>
    );
}
       