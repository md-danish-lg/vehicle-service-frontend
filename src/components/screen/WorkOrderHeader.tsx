import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import type { WorkOrder } from "../features/work-orders/types";


type Props = {
  workOrder: WorkOrder;
};

export function WorkOrderHeader({ workOrder }: Props) {
  function getBadgeVariant() {
    switch (workOrder.status) {
      case "CREATED":
        return "default";

      case "ASSIGNED":
        return "primary";

      case "IN_PROGRESS":
        return "warning";

      case "COMPLETED":
        return "success";
    }
  }

  const formatDate = (date: string | null) =>
    date
      ? new Date(date).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      : "—";

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Work Order #{workOrder.id}
        </h1>

        <Badge variant={getBadgeVariant()} size="md">
          {workOrder.status.replace("_", " ")}
        </Badge>
      </div>

      <Card className="grid grid-cols-5 gap-6">
        <div>
          <p className="text-sm text-slate-400">Vehicle</p>

          <p className="font-semibold">
            {workOrder.vehicle.make} {workOrder.vehicle.model}
          </p>

          <p className="text-slate-400">
            ({workOrder.vehicle.licensePlate})
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Mechanic</p>

          <p className="font-semibold">
            {workOrder.mechanic?.name ?? "Unassigned"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Created</p>

          <p>{formatDate(workOrder.createdAt)}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Started</p>

          <p>{formatDate(workOrder.startedAt)}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Completed</p>

          <p>{formatDate(workOrder.completedAt)}</p>
        </div>
      </Card>
    </>
  );
}