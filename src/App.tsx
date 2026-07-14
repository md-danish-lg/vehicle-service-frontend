import { useState } from "react";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Modal } from "./components/ui/Modal";
import { X } from "lucide-react";
import { Sidebar } from "./components/screen/Sidebar";
import { CustomerList } from "./components/screen/CustomerList";
import { Route, Routes } from "react-router-dom";


export default function App() {

    
    return( 
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={<CustomerList />} />
                
                


            </Routes>
            
        </>


    )
}