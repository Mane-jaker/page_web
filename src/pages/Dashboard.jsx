import AsideDashboard from "../components/AsideDashboard"
import HeaderDashboard from "../components/HeaderDashboard"
import LayoutDashboard from "../components/LayoutDashboard"

function Dashboard() {
    return (
        <div className="antialiased bg-gray-50">
            <HeaderDashboard />
            <div className="flex h-screen mt-24">
                <AsideDashboard />
                <LayoutDashboard />
            </div>
        </div>
    )
}

export default Dashboard