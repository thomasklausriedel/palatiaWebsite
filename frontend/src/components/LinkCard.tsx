import "./LinkCard.scss"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom";

interface LinkCardProps {
    title: string;
    link: string;
    icon: LucideIcon;
}

export const LinkCard = ({ title, link, icon: Icon }: LinkCardProps) => {
    return (
            <Link to={link} className="link-card">
                <div className="link-card-content">
                    <Icon className="link-card-icon" size={18} />
                    {title}
                </div>
            </Link>
        
    )
}