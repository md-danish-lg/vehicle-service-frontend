import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";

export default function App() {
    return( <>
        <h1 className="text-3xl font-bold underline"></h1>
            Hello world!
        <Button variant="hollow" size="lg">
            Add Vehicle
        </Button>
        <Card>
            <h1>This is a card component</h1>
        </Card>
        </>
    )
}