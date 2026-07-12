import type { ReactNode } from "react";


type cardProps = {
    children: ReactNode;
} 

export function Card({children}: cardProps) {
    return (
        <div className="bg-blue-200/5 border border-white/10 shadow-md rounded-sm p-6 text-white w-md">
            {children}
        </div>
    )


}