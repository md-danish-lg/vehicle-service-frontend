

import { useParams, useNavigate } from "react-router-dom"
import { Breadcrumb } from "../ui/Breadcrumb";


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
        ]
    }


    return (
        <div className="ml-80 max-w-300 py-9">
        
            <Breadcrumb items={[
                { label: "Customers", href: "/" },
                { label: customer.name }
            ]} />
        </div>
    )




}