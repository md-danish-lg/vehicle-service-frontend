export type WorkOrderStatus =
  | "CREATED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "COMPLETED";

export type ServiceItem = {
  id: number;
  description: string;
  laborCost: number;
};

export type Mechanic = {
  id: number;
  name: string;
};

export type Vehicle = {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
};

export type WorkOrder = {
  id: number;
  status: WorkOrderStatus;

  vehicle: Vehicle;
  mechanic: Mechanic | null;

  notes: string;

  createdAt: string;
  startedAt: string | null;
  completedAt: string | null;

  serviceItemList: ServiceItem[];
};