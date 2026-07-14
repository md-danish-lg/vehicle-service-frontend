import { Card } from "../../components/ui/Card";
import type { WorkOrder } from "../features/vehicles/types";

import { ServiceHistoryRow } from "./ServiceHistoryRow";

type Props = {
  workOrders: WorkOrder[];
};

export function ServiceHistoryTable({ workOrders }: Props) {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">
        Service History
      </h2>

      <Card className="overflow-hidden p-0 w-full max-w-280 flex justify-between flex-col">
        <div className="grid grid-cols-[0.5fr_0.8fr_1fr_1fr_0.5fr] bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-400">
          <span>#</span>
          <span>Status</span>
          <span>Date</span>
          <span>Items</span>
          <span></span>
        </div>

        {workOrders.map((workOrder) => (
          <ServiceHistoryRow
            key={workOrder.id}
            workOrder={workOrder}
          />
        ))}
      </Card>
    </div>
  );
}