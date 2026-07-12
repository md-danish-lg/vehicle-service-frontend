import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Variant = 'general' | 'complete' | 'warn'| 'grey' | 'hollow'

type ButtonProps = {
    variant: Variant
} & ComponentProps<'button'>

export function Button({ children, 
    variant,
     ...props }: ButtonProps) {

   return (
    <button 

    {...props} 
    className={twMerge(
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200",
         getVarietyStyles(variant))}
    >
      {children}
    </button>
  )
}

function getVarietyStyles(variant: Variant) {
    switch (variant) {
        case 'general':
            return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
        case 'complete':
            return 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded';
        case 'warn':
            return 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
        case 'grey':
            return 'bg-transparent hover:bg-gray-200 border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded';
        case 'hollow':
            return 'bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-2 px-4 rounded';
        default:
            return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    }
}