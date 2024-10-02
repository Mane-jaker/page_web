import AsideDashboard from "../components/AsideDashboard";
import HeaderDashboard from "../components/HeaderDashboard";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="antialiased bg-gray-50">
            <HeaderDashboard />
            <div className="flex h-screen mt-24">
                <AsideDashboard />
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard