import { ChevronRight } from "lucide-react";

import { Card } from "./Card";

type TableProps = {
    data: Array<{
        id: number;
        name: string;
        phone: string;
        email: string;
        vehicles: number;
    }>;
} & React.ComponentProps<"table">;

export function Table({data}: TableProps) {
    const tableItems = data.map(data =>
        <Card key={data.id} className="flex justify-between w-full my-1 hover:bg-blue-100/10 transition-colors items-center">
            <h2>{data.name}</h2>
            <h2>{data.phone}</h2>
            <h2>{data.email}</h2>
            <h2 className="px-2 py-1 bg-white/15 rounded-sm ">{data.vehicles}</h2> 
            <ChevronRight />

        </Card>
    )
    return(
        <Card className="w-full">
            
            <div>
                {tableItems}
            </div>
            
            
        </Card>

    )


}