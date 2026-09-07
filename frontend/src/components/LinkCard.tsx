import "./LinkCard.scss"
import type { LucideIcon } from "lucide-react"

interface LinkCardProps {
    title: string;
    link: string;
    icon: LucideIcon;
}

export const LinkCard = ({ title, link, icon: Icon }: LinkCardProps) => {
    return (
            <a href={link} className="link-card">
                <div className="link-card-content">
                    <Icon className="link-card-icon" size={48} />
                    {title}
                </div>
            </a>
        
    )
}