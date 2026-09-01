import zirkel from "../assets/images/zirkel.png";
import "./Logo.scss";

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <img src={zirkel} alt="Logo" className={`logo ${className || ''}`} />
    );
}
