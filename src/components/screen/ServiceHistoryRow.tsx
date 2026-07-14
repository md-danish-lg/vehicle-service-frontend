import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ServiceStatusBadge } from "./ServiceStatusBadge";
import type { WorkOrder } from "../features/vehicles/types";

type Props = {
  workOrder: WorkOrder;
};

export function ServiceHistoryRow({ workOrder }: Props) {
  const navigate = useNavigate();

  const createdDate = new Date(workOrder.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <button
      onClick={() => navigate(`/work-orders/${workOrder.id}`)}
      className="
        grid
        w-full
        grid-cols-[0.5fr_0.8fr_1fr_1fr_0.5fr]
        items-center
        border-b
        border-slate-800
        px-6
        py-4
        text-left
        transition-colors
        hover:bg-slate-800
        last:border-none
      "
    >
      <span>#{workOrder.id}</span>

    <div>
      <ServiceStatusBadge status={workOrder.status} />

    </div>

      <span>{createdDate}</span>

      <span className="text-slate-300">
        {workOrder.serviceItemList.length === 1
          ? "1 item"
          : `${workOrder.serviceItemList.length} items`}
      </span>

      <ChevronRight
        className="justify-self-end text-slate-500"
        size={18}
      />
    </button>
  );
}