import { User, Users } from "lucide-react";
import { Link } from 'react-router-dom'

export function Sidebar(){
    return (
        <div className="sidebar fixed h-full w-3xs px-5 pt-6 border border-l-0 border-t-0">
            <div className="title text-center text-3xl">
                <h1>Vehicle Service</h1>
            </div>

            <div className="entities mt-10 flex flex-col gap-5">
                <Link to="/" className="flex gap-2 hover:bg-white/5 py-5 px-2 rounded-md hover:border hover:border-l-blue-700 hover:border-l-5 transition-all">
                    <Users className="w-6 h-6" /> Customers
                </Link>
                <Link to="/mechanics" className="flex gap-2 hover:bg-white/5 py-5 px-2 rounded-md hover:border hover:border-l-blue-700 hover:border-l-5 transition-all">
                    <User className="w-6 h-6" /> Mechanic
                </Link>
            </div>
        </div>
    )
}