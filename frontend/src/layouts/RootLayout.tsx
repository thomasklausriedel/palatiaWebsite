import { Outlet } from "react-router-dom"
import { Header } from "../segments/Header"
import { Sidebar } from "../segments/Sidebar"
import "./RootLayout.scss"
import { useState } from "react"
import { Footer } from "../segments/Footer"

export const RootLayout = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    return (
        <div className="root-layout flex-dflex">
            <div className={`sidebar-container ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
                <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
            </div>
            <div className="content-container">
                <div className="header-container">
                    <Header sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                </div>
                <div className="main-content">
                    <Outlet />
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </div>
    )
}