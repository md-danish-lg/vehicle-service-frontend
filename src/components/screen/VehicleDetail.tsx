import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { type WorkOrder, type Vehicle } from "../features/vehicles/types";
import { VehicleHeader } from "../features/VehicleHeader";
import { ServiceHistoryTable } from "./ServiceHistoryTable";


export function VehicleDetail() {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

    useEffect(() => {
    async function loadVehicle() {
        const [vehicleRes, historyRes] = await Promise.all([
        fetch(`http://localhost:8080/api/v1/vehicles/${id}`),
        fetch(`http://localhost:8080/api/v1/vehicles/${id}/history`),
        ]);

        const vehicle = await vehicleRes.json();
        const history = await historyRes.json();

        setVehicle(vehicle);
        setWorkOrders(history);
        setLoading(false);
    }

    loadVehicle();
    }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (!vehicle) {
    return <p>Vehicle not found.</p>;
  }

  return (
    <div className="ml-80 max-w-7xl py-8">
      <Breadcrumb
        items={[
          { label: "Customers", href: "/" },
          { label: "Vehicle history" },
          { label: `${vehicle.make} ${vehicle.model}` },
        ]}
      />

      <VehicleHeader vehicle={vehicle} />

      <ServiceHistoryTable
            workOrders={workOrders}
        />


    </div>
  );
}