import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

type BreadcrumbItem = {
    label: string
    href?: string
}

type BreadcrumbProps = {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight className="w-4 h-4" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-white transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white">{item.label}</span>
                    )}
                </div>
            ))} 
        </div>
    )
}