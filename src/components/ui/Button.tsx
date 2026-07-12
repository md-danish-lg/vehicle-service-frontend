import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "outline"
  | "hollow";

type Size = "sm" | "md" | "lg";

const baseStyles =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";


type ButtonProps = {
    variant?: Variant;
    size?: Size;
} & ComponentProps<"button">;


export function Button({ children, 
    variant="primary",
    size="md",
    className,
     ...props }: ButtonProps) {

   return (
    <button 

    {...props} 
    className={twMerge(
        baseStyles,
        getVariantStyles(variant),
        getSizeStyles(size),
        className)}
    >
      {children}
    </button>
  )
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case 'primary':
            return 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
        case 'secondary':
            return 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded';
        case 'success':
            return 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded';
        case 'danger':
            return 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
        case 'outline':
            return 'bg-transparent hover:bg-gray-200 border border-slate-700 text-slate-200 font-bold py-2 px-4 rounded';
        case 'hollow':
            return 'bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500/10 font-bold py-2 px-4 rounded';
        default:
            return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    }
}

function getSizeStyles(size: Size) {
    switch (size) {
        case "sm":
            return "h-8 px-3 text-xs";

        case "md":
            return "h-10 px-4";

        case "lg":
            return "h-12 px-6";
    }
}