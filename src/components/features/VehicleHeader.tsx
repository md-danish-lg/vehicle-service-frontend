import { CarFront, Gauge, Pencil } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import type { Vehicle } from "./vehicles/types";


type VehicleHeaderProps = {
  vehicle: Vehicle;
};

export function VehicleHeader({ vehicle }: VehicleHeaderProps) {
  return (
    <Card className="flex items-center justify-between w-full max-w-280">
      <div className="flex items-center gap-5">
        <div className="rounded-lg bg-slate-800 p-4">
          <CarFront size={30} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {vehicle.make} {vehicle.model}
          </h1>

          <p className="mt-1 text-slate-400">
            {vehicle.year} • {vehicle.licensePlate}
          </p>

          <div className="mt-3 flex items-center gap-2 text-slate-300">
            <Gauge size={18} />

            <span>{vehicle.mileage.toLocaleString()} km</span>
          </div>
        </div>
      </div>
    </Card>
  );
}