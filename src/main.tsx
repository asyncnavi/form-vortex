import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './pages/layout';
import { PrimeReactProvider } from 'primereact/api';
import Dashboard from './pages/dashboard';
import CreateFormPage from './pages/create';


const router = createHashRouter([
  {
    path : '/',
    element : <MainLayout />, 
    children : [
      {
        path : 'dashboard',
        element : <Dashboard />
      },
      {
        path : 'create',
        element : <CreateFormPage />
      }
      
    ]    
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
      <PrimeReactProvider>
         <RouterProvider router={router} />
      </PrimeReactProvider>
    
  </React.StrictMode>,
)
