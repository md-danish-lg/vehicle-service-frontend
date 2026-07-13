import { useState } from "react";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Modal } from "./components/ui/Modal";
import { X } from "lucide-react";
import { Table } from "./components/ui/Table";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

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
    }
];

    return( 

    <div className="max-w-7xl mx-auto p-4">
        <Table data={tableData}>
            <Button variant="hollow" size="sm">
                Edit
            </Button>
        </Table>

        <h1 className="text-3xl font-bold underline"></h1>
            Hello world!
        <Button variant="hollow" size="lg" onClick={() => setIsOpen(true)}>
            Add Vehicle
        </Button>
        <Input label="Vehicle Make" placeholder="Enter vehicle make" buttonType="primary" buttonText="Add Vehicle"></Input>
       
        <Badge variant="success" size="md" className="ml-2">
            Success
        </Badge>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex items-center justify-between">
                <h2>Assign Mechanic</h2>
                <X className="h-6 w-6 cursor-pointer" onClick={() => setIsOpen(false)} />

            </div>

            <div className="mt-4 flex justify-end gap-2">
                <Button variant="secondary" size="md" onClick={() => setIsOpen(false)}>
                Cancel
                </Button>

                <Button variant="primary" size="md">
                Assign
                </Button>
            </div>
        </Modal>
    </div>
    )
}