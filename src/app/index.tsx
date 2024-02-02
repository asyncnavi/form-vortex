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
       

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Eku@018018';
FLUSH PRIVILEGES;