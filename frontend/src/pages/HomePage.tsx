import { Gallery, type GalleryImage } from "../components/Gallery"
import "./HomePage.scss"

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
        <div className="main-content">
            <Gallery
                images={homepageImages}
                title="Gallery"
                description="Impressions from Palatia."
            />
        </div>
    )
}