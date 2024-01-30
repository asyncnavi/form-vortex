import { Avatar } from 'primereact/avatar'
import { Sidebar } from 'primereact/sidebar'
import { FC } from 'react'

type SideDrawerProps = {
    visible : boolean
    onHide: () => void    
}


const SideDrawer : FC<SideDrawerProps> = ({  visible, onHide }) => {

    const customHeader = (
        <div className="flex align-items-center gap-2 ">
           <img src="/logo.svg" className='w-[100px]' />
       </div>
    )

    return (
         <Sidebar header={customHeader} visible={visible} onHide={onHide} >
        <h2>Sidebar</h2>
            <p>
            
            </p>
         </Sidebar>
    )
}


export default SideDrawer