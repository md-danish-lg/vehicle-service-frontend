import { ChevronRight } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";



export type Customer = {
  id: number;
  name: string;
  phone: string;
  email: string;
  vehicles: number;
};


type CustomerTableProps = {
  customers: Customer[];

};

export function CustomerTable({
  customers
}: CustomerTableProps) {


    const navigate = useNavigate();
  return (
    <Card className="overflow-hidden p-0 w-full">
      
      <div className="grid grid-cols-[2fr_1.5fr_2.5fr_120px_40px] border-b border-slate-700 bg-slate-800 px-6 py-4 text-sm font-semibold text-slate-300">
        <span>Name</span>
        <span>Phone</span>
        <span>Email</span>
        <span>Vehicles</span>
        <span />
      </div>

      
      {customers.map((customer) => (

        <button
          key={customer.id}
          onClick={() => navigate(`/customers/${customer.id}`)}
          className="grid w-full grid-cols-[2fr_1.5fr_2.5fr_120px_40px] items-center border-b border-slate-800 px-6 py-4 text-left transition-colors hover:bg-slate-800 last:border-none"
        >
          <span className="font-medium text-white">
            {customer.name}
          </span>

          <span className="text-slate-400">
            {customer.phone}
          </span>

          <span className="text-slate-400">
            {customer.email}
          </span>

          <Badge variant="default" size="sm" className="w-2">
            {customer.vehicles}
          </Badge>

          <ChevronRight
            size={18}
            className="justify-self-end text-slate-500"
          />
        </button>
      ))}
    </Card>
  );
}