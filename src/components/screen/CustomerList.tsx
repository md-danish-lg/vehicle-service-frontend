import { Plus } from "lucide-react";
import { Button } from "../ui/Button";
import { CustomerTable } from "../ui/CustomerTable";
import { useState } from "react";
import { Pagination } from "../ui/Pagination";

const ITEMS_PER_PAGE = 5
export function CustomerList(){
    const customers = [
        {
            id: 1,
            name: "John Doe",
            phone: "+1 555-1234",
            email: "john@example.com",
            vehicles: 2,
        },
        {
            id: 2,
            name: "Sarah Smith",
            phone: "+1 555-6789",
            email: "sarah@example.com",
            vehicles: 1,
        },
        {
            id: 3,
            name: "Michael Brown",
            phone: "+1 555-9876",
            email: "michael@example.com",
            vehicles: 4,
        },
        {
            id: 4,
            name: "Michael Brown",
            phone: "+1 555-9876",
            email: "michael@example.com",
            vehicles: 4,
        },
        {
            id: 5,
            name: "Michael Brown",
            phone: "+1 555-9876",
            email: "michael@example.com",
            vehicles: 4,
        },
        {
            id: 6,
            name: "Michael Brown",
            phone: "+1 555-9876",
            email: "michael@example.com",
            vehicles: 4,
        },
        ];


        const [currentPage, setCurrentPage] = useState(1);

        const start = (currentPage - 1 ) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;

        const paginatedCustomers = customers.slice(start, end);

        

    return (
        <>
        
            <div className="ml-70 max-w-300">
                <div className="flex justify-between overflow-hidden px-10 py-8 text-2xl font-bold">
                    <h1>Customers</h1>
                    <Button variant="primary" size="md">
                        <Plus />Add Customer</Button>
                </div>

                <CustomerTable customers={paginatedCustomers}></CustomerTable>
                <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(customers.length / ITEMS_PER_PAGE)}
                        onPageChange={setCurrentPage}
      />
            </div>        
        </>
    )
}