
import { twMerge } from "tailwind-merge";

type Variant = "default" | "primary" | "success" | "warning" | "danger"| "info";
type Size = "sm" | "md" | "lg";

type BadgeProps = {
    variant?: Variant;
    size?: Size;
} & React.ComponentProps<"span">;

export function Badge({ variant="default", size="md", className, ...props }: BadgeProps) {
    return (
        <span className={twMerge("inline-flex items-center justify-center bg-primary rounded-md text-white text-xs font-bold px-",
            getVariantStyles(variant),
            getSizeStyles(size),
            className)} {...props} />
    )
}


function getSizeStyles(size?: Size) {
    switch (size) {
        case "sm":
            return "px-2.5 py-1.5 text-xs";
        case "md":
            return "px-4 py-2 text-sm";
        case "lg":
            return "px-5 py-3 text-base";
        default:
            return "px-3 py-1.5 text-sm";
    }
}
function getVariantStyles(variant?: Variant) {
    switch (variant) {
        case "default":
            return "bg-gray-500/20 text-white border border-gray-800";
        case "primary":
            return "bg-blue-500/20 text-blue-300 border border-blue-800";
        case "success":
            return "bg-green-500/20 text-green-300  border border-green-800 ";
        case "warning":
            return "bg-yellow-500/20 text-yellow-300 border border-yellow-800";
        case "danger":
            return "bg-red-500/20 text-red-300 border border-red-800";
        case "info":
            return "bg-indigo-500/20 text-indigo-300 border border-indigo-800";
        default:
            return "bg-gray-500/20 text-white border border-gray-800";
    }
}