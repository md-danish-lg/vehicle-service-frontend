

import { useParams, useNavigate } from "react-router-dom"
import { Breadcrumb } from "../ui/Breadcrumb";
import { Card } from "../ui/Card";
import { CarFrontIcon, Mail, Phone, Plus } from "lucide-react";
import { Button } from "../ui/Button";


export function CustomerDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const customer = {
        id: 1,
        name: "Ahmed Khan",
        phone: "03001234567",
        email: "ahmed@example.com",
        vehicleList: [
            { id: 1, make: "Toyota", model: "Corolla", year: 2019, licensePlate: "ABC-123", mileage: 45000 },
            { id: 2, make: "Honda", model: "Civic", year: 2020, licensePlate: "XYZ-456", mileage: 30000 },
            { id: 3, make: "Honda", model: "Civic", year: 2020, licensePlate: "XYZ-456", mileage: 30000 },
            { id: 4, make: "Honda", model: "Civic", year: 2020, licensePlate: "XYZ-456", mileage: 30000 },
        ]
    }

    


    return (
        <div className="ml-80 max-w-280 py-9">
        
            <Breadcrumb items={[
                { label: "Customers", href: "/" },
                { label: customer.name }
            ]} />

            <Card className="w-full flex flex-col justify-center">
                <h1 className="font-bold text-3xl">{customer.name}</h1>
                <div className="info flex items-center gap-15">
                    <p className="flex gap-3 items-center mt-8"><Phone className="w-4 h-6"/> {customer.phone}</p>
                    <p className="flex gap-3 items-center mt-8"><Mail className="w-4 h-6"/> {customer.email}</p>

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

                {customer.vehicleList.map((vehicle)=>(
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




}