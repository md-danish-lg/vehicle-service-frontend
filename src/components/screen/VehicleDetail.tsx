import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Breadcrumb } from "../../components/ui/Breadcrumb";
import type { Vehicle } from "../features/vehicles/types";
import { VehicleHeader } from "../features/VehicleHeader";


export function VehicleDetail() {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicle(data);
        setLoading(false);
      });
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
          { label: vehicle.customerName },
          { label: `${vehicle.make} ${vehicle.model}` },
        ]}
      />

      <VehicleHeader vehicle={vehicle} />


    </div>
  );
}