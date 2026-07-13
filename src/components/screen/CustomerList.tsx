import { Plus } from "lucide-react";
import { Button } from "../ui/Button";
import { Table } from "../ui/Table";

export function CustomerList(){
    const tableData = [{
        id:1,
        name: "John Doe",
        phone:"+92 317792481",
        email: "dsadf@gmail.com",
        vehicles: 2
    }, {
        id:2,
        name: "John Doe",
        phone:"+92 317792481",
        email: "dsadf@gmail.com",
        vehicles: 2
    }];

    return (
        <>
        
            <div className="ml-70 max-w-300">
                <div className="flex justify-between overflow-hidden px-10 py-8 text-2xl font-bold">
                    <h1>Customers</h1>
                    <Button variant="primary" size="md">
                        <Plus />Add Customer</Button>
                </div>

                <Table data={tableData}></Table>
            </div>        
        </>
    )
}