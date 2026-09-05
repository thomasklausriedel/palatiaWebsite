import { ChevronRight, Info, Phone, ShoppingCart, ChevronLeft, MapPin } from "lucide-react";
import "./Sidebar.scss";
import { Tooltip } from "../components/Tooltip";
import { Logo } from "../components/Logo";

interface SidebarProps {
    sidebarExpanded: boolean;
    setSidebarExpanded: (expanded: boolean) => void;
}

export const Sidebar = ({ sidebarExpanded, setSidebarExpanded }: SidebarProps) => {
    return (
        <div>
            <div className={`sidebar g-16 ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>

                <div id="sidebar-toggle-home-section">
                    {sidebarExpanded && (
                        <a className="sidebar-logo" href="/">
                            <Logo /> {/* wenn sidebar expanded ist, zeige logo mit home-funktion */}
                        </a>
                    )}
                    <button className="sidebar-logo" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                        {sidebarExpanded ? (
                            <ChevronLeft size={32} className="collapse-icon clr-1" />
                        ) : (
                            <Tooltip text="Expand Sidebar">
                                <Logo className="app-icon" />
                                <ChevronRight size={32} className="hover-icon clr-1" />
                            </Tooltip>
                        )}
                    </button>

                </div>

                <a className="sidebar-link" href="/about">
                    <Info size={32} className="clr-1" />
                    {sidebarExpanded && <span className="sidebar-link-text">About</span>}
                </a>
                <a className="sidebar-link" href="/contact">
                    <Phone size={32} className="clr-1" />
                    {sidebarExpanded && <span className="sidebar-link-text">Contact</span>}
                </a>
                <a className="sidebar-link" href="/products">
                    <ShoppingCart size={32} className="clr-1" />
                    {sidebarExpanded && <span className="sidebar-link-text">Products</span>}
                </a>
                <a className="sidebar-link" href="/directions">
                    <MapPin size={32} className="clr-1" />
                    {sidebarExpanded && <span className="sidebar-link-text">Directions</span>}
                </a>
            </div>
            <div className={`overlay-backdrop ${sidebarExpanded ? 'is-open' : ''}`}></div>
        </div>

    )
};