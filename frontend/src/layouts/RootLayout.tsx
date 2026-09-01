import { Outlet } from "react-router-dom"
import { Header } from "../segments/Header"
import { Sidebar } from "../segments/Sidebar"
import "./RootLayout.scss"
import { useState } from "react"

export const RootLayout = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    return (
        <div className="flex-dflex">
            <div className={`sidebar-container ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
                <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
            </div>
            <div>
                <div className="h-10vh">
                    <Header/>
                </div>
                <div className="h-80vh">
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}