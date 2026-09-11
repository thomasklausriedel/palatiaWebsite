import { Home, Info, MapPin, Phone, ScrollText } from "lucide-react"
import { LinkCard } from "../components/LinkCard"
import "./HomePage.scss"

export const HomePage = () => {
    return (
        <div className="main-content">
            <LinkCard link="#" title="Home" icon={Home}/>
            <LinkCard link="/about" title="About" icon={Info}/>
            <LinkCard link="/contact" title="Contact" icon={Phone}/>
            <LinkCard link="/articles" title="FUZ-Artikel" icon={ScrollText}/>
            <LinkCard link="/directions" title="Directions" icon={MapPin}/>
        </div>
    )
}