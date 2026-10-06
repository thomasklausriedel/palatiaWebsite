import { Gallery, type GalleryImage } from "../components/Gallery"

const housepageImageModules = import.meta.glob("../assets/images/housePage/*.{jpg,jpeg,png,webp}", {
	eager: true,
	import: "default",
	query: "?url",
}) as Record<string, string>

const housepageImageThumbnailModules = import.meta.glob("../assets/images/housePage/*.{jpg,jpeg,png,webp}", {
	eager: true,
	import: "default",
	query: "?w=640&format=webp",
}) as Record<string, string>

const housepageImages: GalleryImage[] = Object.entries(housepageImageModules).map(([path, src]) => {
	const filename = path.split("/").pop() ?? "housepage image"
	const name = filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ")

	return {
		src,
		thumbnailSrc: housepageImageThumbnailModules[path],
		alt: name.charAt(0).toUpperCase() + name.slice(1),
	}
})

export const HousePage = () => {
	return (
		<>
			<Gallery images={housepageImages}/>
		</>
	);
}
