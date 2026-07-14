import { Plus } from "lucide-react";
import { Button } from "../ui/Button";
import { CustomerTable } from "../ui/CustomerTable";
import { useState } from "react";
import { Pagination } from "../ui/Pagination";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 5
export function CustomerList(){
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/customers")
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);


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