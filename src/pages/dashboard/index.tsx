import { Button } from "primereact/button";
import { Card } from "primereact/card"


const Dashboard = () => {

    const header = (
        <img alt="Card" className="h-[60px]" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    return (
        <div className="container mx-auto my-4 flex w-full gap-2 flex-grow md:flex-nowrap sm:flex-nowrap">
           <Card  
               subTitle="Collect quick responses with a form or survey" 
               footer={<Button size="small" label="New Form" />} 
               header={header} 
               className="w-full" />
           <Card  
               subTitle="Asset learning progess with a quiz or test" 
               footer={ <Button size="small" label="New Quiz" />} 
               header={header} 
               className="w-full"  />
        </div>
    )
}


export default Dashboard