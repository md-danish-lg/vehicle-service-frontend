import { Button } from "../../components/ui/Button";

type Props = {
  status: "CREATED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED";

  onAssign: () => void;

  onStart: () => void;

  onAddService: () => void;

  onComplete: () => void;
};

export function WorkOrderActions({
  status,
  onAssign,
  onStart,
  onAddService,
  onComplete,
}: Props) {
  switch (status) {
    case "CREATED":
      return (
        <div className="mt-5 flex justify-end">
          <Button variant="primary" onClick={onAssign}>
            Assign Mechanic
          </Button>
        </div>
      );

    case "ASSIGNED":
      return (
        <div className="mt-5 flex justify-end">
          <Button variant="primary" onClick={onStart}>
            Start Work Order
          </Button>
        </div>
      );

    case "IN_PROGRESS":
      return (
        <div className="mt-5 flex justify-end gap-4">
          <Button variant="outline" onClick={onAddService}>
            Add Service Item
          </Button>

          <Button variant="success" onClick={onComplete}>
            Complete Work Order
          </Button>
        </div>
      );

    case "COMPLETED":
      return null;
  }
}