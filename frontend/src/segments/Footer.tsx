import { Home, Info, MapPin, Phone, ScrollText } from "lucide-react";
import { LinkCard } from "../components/LinkCard";
import "./Footer.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div></div>
                <div className="link-section">
                    <LinkCard link="#" title="Home" icon={Home}/>
                    <LinkCard link="/about" title="About" icon={Info}/>
                    <LinkCard link="/contact" title="Contact" icon={Phone}/>
                    <LinkCard link="/articles" title="FUZ-Artikel" icon={ScrollText}/>
                    <LinkCard link="/directions" title="Directions" icon={MapPin}/>
                </div>
            </div>
        </footer>
    );
};
