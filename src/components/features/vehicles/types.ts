
export type ServiceItem = {
  id: number;
  description: string;
  laborCost: number;
};

export type WorkOrder = {
  id: number;
  status: "CREATED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED";
  notes: string;
  createdAt: string;
  completedAt: string | null;
  serviceItemList: ServiceItem[];
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

