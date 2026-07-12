import { Button, type Variant } from "./Button";
import { Card } from "./Card";  




type InputProps = {
    children?: React.ReactNode;
    label?: string;
    buttonType?: Variant,
    buttonText?: string,
} & React.ComponentProps<"input">;


export function Input({ children, label="label", buttonType="primary", buttonText, className, ...props }: InputProps) {
    return (
        <Card >
            <div className="flex flex-col gap-2 items-baseline">
                <h1 className="text-lg font-bold text-white mb-2">{label}</h1>
                <p className="text-sm text-slate-400 mb-2.5">{label}</p>
                <input type="text" {...props} className="bg-transparent w-full border border-slate-600 text-slate-300 placeholder:text-slate-500 py-2 px-4" />
                
            </div>
            <div className="flex justify-end gap-2">

                <Button
                        variant={buttonType}
                        size="md"
                        className="mt-2 gap-0.5"
                    >
                        {buttonText}
                </Button>
                
            </div>
        </Card>
       
    )
}