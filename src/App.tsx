import { useState } from "react";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Modal } from "./components/ui/Modal";
import { X } from "lucide-react";
import { Sidebar } from "./components/screen/Sidebar";
import { CustomerList } from "./components/screen/CustomerList";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    
    return( 
        <>
            <Sidebar />
            <CustomerList />
        </>


    )
}