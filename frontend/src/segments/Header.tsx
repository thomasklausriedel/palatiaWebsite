import { Menu } from "lucide-react";
import "./Header.scss"

interface HeaderProps {
    sidebarExpanded: boolean;
    setSidebarExpanded: (expanded: boolean) => void;
}

export const Header = ({ sidebarExpanded, setSidebarExpanded }: HeaderProps) => {
    return (
        <header className="header">
            <div className="header-content">
                <div onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                    {!sidebarExpanded && <Menu
                     className="menu-btn" />}
                </div>
                <span className="header-title">W.K.St.V. Unitas Palatia Darmstadt</span>
            </div>
        </header>
    );
};