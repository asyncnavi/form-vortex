import { PrimeReactProvider } from 'primereact/api';
import Header from '../components/header';
import Dashboard from '../pages/dashboard';
        

export default function App() {
    return (
        <PrimeReactProvider>
           <Header />
           <Dashboard />
        </PrimeReactProvider>
    );
}
       