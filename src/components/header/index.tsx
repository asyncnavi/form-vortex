import {  IconMenu2 } from '@tabler/icons-react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import SideDrawer from './sidebar';
import { useState } from 'react';

const Header =( ) => {
    const [visible,setVisible] = useState(true)

    const handleSideDrawer = () => setVisible(!visible)

    return (
        <header className="flex w-full border-b py-2 ">
            <SideDrawer visible={visible} onHide={ () => handleSideDrawer()} />
            <div className="container flex justify-between items-center mx-auto">
                <div className="flex">
                    <Button size="small" className='mr-2' onClick={handleSideDrawer}>
                    <IconMenu2 size={18}  /> 
                    </Button>

                <img src="/logo.svg" alt="" className='w-[100px]' />
                </div>
               <Avatar label="NS" size="large"  shape="circle" className="cursor-pointer" />
            </div>
        </header>
    )
}


export default Header