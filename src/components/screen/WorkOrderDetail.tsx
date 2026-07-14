import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Breadcrumb } from "../../components/ui/Breadcrumb";

import { WorkOrderHeader } from "./WorkOrderHeader";
import { WorkOrderActions } from "./WorkOrderActions";
import type { WorkOrder } from "../features/work-orders/types";



export function WorkOrderDetail() {
  const { id } = useParams();

  const [workOrder, setWorkOrder] = useState<WorkOrder | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/workorders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkOrder(data);
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

  if (!workOrder) return <p>Work order not found.</p>;

  return (
    <div className="ml-80 max-w-7xl py-8">
      <Breadcrumb
        items={[
          { label: "Customers", href: "/" },
          { label: "Vehicle" },
          { label: `Work Order #${workOrder.id}` },
        ]}
      />

      <WorkOrderHeader workOrder={workOrder} />

      <WorkOrderActions
        status={workOrder.status}
        onAssign={() => {}}
        onStart={() => {}}
        onAddService={() => {}}
        onComplete={() => {}}
      />

      
    </div>
  );
}