import { useMatches } from "react-router-dom";
import { LinkCard } from "../components/LinkCard";
import { getNavigationItems } from "../router/navigation";
import "./Footer.scss";

export const Footer = () => {
    const rootMatch = useMatches().find((match) => match.id === "root");
    const navigationItems = getNavigationItems(rootMatch?.handle);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div></div>
                <div className="link-section">
                    {navigationItems.map((item) => (
                        <LinkCard {...item} key={item.link} />
                    ))}
                </div>
            </div>
        </footer>
    );
};
