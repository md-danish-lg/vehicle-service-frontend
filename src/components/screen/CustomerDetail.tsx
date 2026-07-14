

import { useParams, useNavigate } from "react-router-dom"
import { Breadcrumb } from "../ui/Breadcrumb";
import { Card } from "../ui/Card";
import { CarFrontIcon, Mail, Phone, Plus } from "lucide-react";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";

type Vehicle = {
    id: number;
    make: string;
    model: string;
    year: number | string;
    licensePlate: string;
    mileage: number;
}

type Customer = {
    id: number;
    name: string;
    phone?: string;
    email?: string;
    vehicles?: Vehicle[];
}

export function CustomerDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (!id) return;
        fetch(`http://localhost:8080/api/v1/customers/${id}`)
            .then(res => res.json())
            .then((data: Customer) => {
                setCustomer(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [id]);

    

    if (!loading){
        return (
    
            <div className="ml-80 max-w-280 py-9" >
            
                <Breadcrumb items={customer ? [
                    { label: "Customers", href: "/" },
                    { label: customer.name }
                ] : [ { label: "Customers", href: "/" } ]} />

                <Card className="w-full flex flex-col justify-center">
                    <h1 className="font-bold text-3xl">{customer?.name}</h1>
                    <div className="info flex items-center gap-15">
                        <p className="flex gap-3 items-center mt-8"><Phone className="w-4 h-6"/> {customer?.phone}</p>
                        <p className="flex gap-3 items-center mt-8"><Mail className="w-4 h-6"/> {customer?.email}</p>

                    </div>
                </Card>
                <hr className="max-w-280 mt-5 text-slate-600"></hr>

                <div className="flex justify-between mt-5 mb-5">
                    <h1 className="text-3xl font-bold">Vehicles</h1>
                    <Button variant="primary" size="md" className="flex items-center">
                        <Plus className="w-6 h-5" />Register Vehicle
                    </Button>
                </div>


                <div className="grid grid-cols-3 max-w-280 overflow-hidden gap-5">

                    {customer?.vehicles?.map((vehicle)=>(
                        <Card className="max-h-70 w-full" key={vehicle.id}>
                                <div className="flex items-center gap-5">
                                    <CarFrontIcon className="w-8 h-8"/>
                                    <h1 className="text-xl font-bold">{vehicle.make} {vehicle.model} {vehicle.year}</h1>
                                </div>

                                <div className="info py-2">
                                    <p className="text-slate-400 font-bold">License Plate</p>
                                    <p>{vehicle.licensePlate}</p>

                                    <p className="text-slate-400 font-bold mt-2">Mileage</p>
                                    <p>{vehicle.mileage} km</p>
                                </div>
                                
                                <Button onClick={()=>{
                                    navigate(`/vehicles/${vehicle.id}`)
                                }} variant="outline" size="lg" className="w-full mt-2">View Full History</Button>
                                
                                
                            </Card>
                        ))}


                </div>

            
                
            </div>
        )

    }else{
        return(
            <div className="w-full h-full flex items-center justify-center fixed m-auto">
                <span className="loader "></span>
            </div>
        )
    }
    




}