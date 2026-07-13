import { useState } from "react";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Modal } from "./components/ui/Modal";
import { X } from "lucide-react";
import { Table } from "./components/ui/Table";
import { Sidebar } from "./components/screen/Sidebar";

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
        <>
            <Sidebar />
        </>


    )
}