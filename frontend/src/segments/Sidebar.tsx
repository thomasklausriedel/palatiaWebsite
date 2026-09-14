import { ChevronLeft } from "lucide-react";
import { Link, useMatches } from "react-router-dom";
import "./Sidebar.scss";
import { Logo } from "../components/Logo";
import { getNavigationItems } from "../router/navigation";

interface SidebarProps {
    sidebarExpanded: boolean;
    setSidebarExpanded: (expanded: boolean) => void;
}

export const Sidebar = ({ sidebarExpanded, setSidebarExpanded }: SidebarProps) => {
    const rootMatch = useMatches().find((match) => match.id === "root");
    const navigationItems = getNavigationItems(rootMatch?.handle);

    return (
        <div>
            <div className={`sidebar g-16 ${sidebarExpanded ? 'sidebar-expanded is-open' : 'sidebar-collapsed'}`}>

                <div id="sidebar-toggle-home-section">
                    {sidebarExpanded && (
                        <a className="sidebar-logo" href="/">
                            <Logo /> {/* wenn sidebar expanded ist, zeige logo mit home-funktion */}
                        </a>
                    )}
                    <button className="sidebar-logo" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                        {sidebarExpanded && (
                            <ChevronLeft size={32} className="collapse-icon clr-1" />
                        )}
                    </button>

                </div>

                {navigationItems
                    .filter(({ link }) => link !== "/")
                    .map(({ link, title, icon: Icon }) => (
                        <Link className="sidebar-link" to={link} key={link}>
                            <Icon size={32} className="clr-1" />
                            {sidebarExpanded && <span className="sidebar-link-text">{title}</span>}
                        </Link>
                    ))}
            </div>
            <div className={`overlay-backdrop ${sidebarExpanded ? 'is-open' : ''}`}></div>
        </div>

    )
};