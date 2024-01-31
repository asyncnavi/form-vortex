import { Avatar } from 'primereact/avatar';

const Header =() => {

    return (
        <header className="flex w-full border-b py-2 px-1">
            <div className="container flex justify-between items-center mx-auto">
            
                <img src="/logo.svg" alt="" className='w-[100px]' />
               <Avatar label="NS" size="large"  shape="circle" className="cursor-pointer" />
            </div>
        </header>
    )
}


export default Header