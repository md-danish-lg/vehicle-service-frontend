import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";

export default function App() {
    return( 
    <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold underline"></h1>
            Hello world!
        <Button variant="hollow" size="lg">
            Add Vehicle
        </Button>
        <Input label="Vehicle Make" placeholder="Enter vehicle make" buttonType="primary" buttonText="Add Vehicle"></Input>
       
        <Badge variant="success" size="md" className="ml-2">
            Success
        </Badge>
    </div>
    )
}