import { Gallery, type GalleryImage } from "../components/Gallery"
import "./HomePage.scss"
import Wappen from "../assets/images/Wappen.png"

const homepageImageModules = import.meta.glob("../assets/images/homePage/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
}) as Record<string, string>

const homepageImageThumbnailModules = import.meta.glob("../assets/images/homePage/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?w=640&format=webp",
}) as Record<string, string>

const homepageImages: GalleryImage[] = Object.entries(homepageImageModules).map(([path, src]) => {
    const filename = path.split("/").pop() ?? "Homepage image"
    const name = filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ")

    return {
        src,
        thumbnailSrc: homepageImageThumbnailModules[path],
        alt: name.charAt(0).toUpperCase() + name.slice(1),
    }
})

export const HomePage = () => {
    return (
        <div className="home-page">
            <div className="section-1">
                <img src={Wappen} alt="Wappen" className="wappen" />
                <div className="questions">
                    <h2 className="h2-studium-zuhause">Gib Deinem Studium ein Zuhause</h2>
                    <p className="question question-1">Du bist an mehr als nur deinem Studienfach interessiert?</p>
                    <p className="question question-2">Dir sind Werte und Grundsätze wichtig?</p>
                    <p className="question question-3">Du benötigst eine bezahlbare Unterkunft für dein Studium?</p>
                    <p className="question question-4">Du suchst Gemeinschaft, nicht nur für die Dauer des Studiums?</p>
                    <p className="question question-5">Du willst deinen Glauben leben und im Gespräch mit anderen vertiefen?</p>
                </div>
            </div>
            <div className="section-2">
                <div className="slogans">
                    <h2 className="h2-studium-zuhause">Bei uns bist du richtig!</h2>
                    <p className="question question-1">Du bist an mehr als nur deinem Studienfach interessiert?</p>
                    <p className="question question-2">Dir sind Werte und Grundsätze wichtig?</p>
                    <p className="question question-3">Du benötigst eine bezahlbare Unterkunft für dein Studium?</p>
                    <p className="question question-4">Du suchst Gemeinschaft, nicht nur für die Dauer des Studiums?</p>
                    <p className="question question-5">Du willst deinen Glauben leben und im Gespräch mit anderen vertiefen?</p>
                </div>
                <img src={Wappen} alt="Wappen" className="wappen" />
            </div>

            <Gallery
                images={homepageImages}
                title="Gallery"
                description="Impressions from Palatia."
            />
        </div>
    )
}