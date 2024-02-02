import { useEffect } from 'react'
import Header from '../components/header'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const MainLayout = () => { 

    const { pathname } = useLocation()
    const  navigate = useNavigate()

    useEffect(() => {
        if(pathname === '/') {
            navigate('/dashboard')
        }
    }, [pathname, navigate])

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}


export default MainLayout