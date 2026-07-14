
export type WorkOrder = {
  id: number;
  status: "CREATED" | "COMPLETED" | "IN_PROGRESS" | "ASSIGNED";
  createdAt: string;
  mechanic: string;
  items: number;
};

export type Vehicle = {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  mileage: number;
  customerName: string;
  workOrders: WorkOrder[];
};

