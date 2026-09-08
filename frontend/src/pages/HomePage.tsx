import { Home, Info, MapPin, Phone, ShoppingBag } from "lucide-react"
import { LinkCard } from "../components/linkCard"
import "./HomePage.scss"

export const HomePage = () => {
    return (
        <div className="main-content">
            <LinkCard link="#" title="Home" icon={Home}/>
            <LinkCard link="/about" title="About" icon={Info}/>
            <LinkCard link="/contact" title="Contact" icon={Phone}/>
            <LinkCard link="/products" title="Products" icon={ShoppingBag}/>
            <LinkCard link="/directions" title="Directions" icon={MapPin}/>
        </div>
    )
}