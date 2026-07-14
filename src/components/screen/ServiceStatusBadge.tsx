import { Badge } from "../../components/ui/Badge";

type Props = {
  status: "CREATED"|"COMPLETED" | "IN_PROGRESS" | "ASSIGNED";
} & React.ComponentProps<"div">;

export function ServiceStatusBadge({ status, className }: Props) {
  switch (status) {
    case "COMPLETED":
      return (
        <Badge variant="success" size="md" className={className}>
          COMPLETED
        </Badge>
      );

    case "IN_PROGRESS":
      return (
        <Badge variant="warning" size="md" className={className}>
          IN PROGRESS
        </Badge>
      );

    case "ASSIGNED":
      return (
        <Badge variant="primary" size="md" className={className}>
          ASSIGNED
        </Badge>
      );
    case "CREATED":
        return (
            <Badge variant="default" size="md" className={className}>
                CREATED
            </Badge>
        )
  }
}