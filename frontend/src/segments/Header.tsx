import { Menu } from "lucide-react";
import "./Header.scss"
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    sidebarExpanded: boolean;
    setSidebarExpanded: (expanded: boolean) => void;
}

export const Header = ({ sidebarExpanded, setSidebarExpanded }: HeaderProps) => {
    const viewportWidth = window.innerWidth;
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-content">
                <div onClick={viewportWidth < 768 ? () => navigate("/") : () => setSidebarExpanded(!sidebarExpanded)}>
                    {!sidebarExpanded && <Menu size={48}
                     className="menu-btn" />}
                </div>
                <div className="header-title">
                        W.K.St.V. Unitas Palatia Darmstadt
                </div>
            </div>
        </header>
    );
};