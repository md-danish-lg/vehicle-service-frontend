import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";


type cardProps = {
    children: ReactNode;
}& React.ComponentProps<"div">; 

export function Card({children, className}: cardProps) {
    return (
        <div className={twMerge("bg-blue-200/5 border border-white/10 shadow-md rounded-sm p-6 text-white w-md", className)}>
            {children}
        </div>
    )


}