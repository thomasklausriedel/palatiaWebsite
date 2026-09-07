import "./LinkCard.scss"
import type { LucideIcon } from "lucide-react"

interface LinkCardProps {
    title: string;
    link: string;
    icon: LucideIcon;
}

export const LinkCard = ({ title, link, icon: Icon }: LinkCardProps) => {
    return (
        <div className="link-card">
            <a href={link}>
                <Icon className="link-card-icon" size={24} />
                {title}
            </a>
        </div>
    )
}