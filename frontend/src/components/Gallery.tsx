import "./Gallery.scss"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export interface GalleryImage {
    src: string
    alt: string
}

interface GalleryProps {
    images: GalleryImage[]
    title?: string
    description?: string
}

export const Gallery = ({ images, title = "Gallery", description }: GalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const selectedImage = selectedIndex === null ? undefined : images[selectedIndex]

    const showPrevious = useCallback(() => {
        if (images.length > 0) {
            setSelectedIndex((currentIndex) => {
                const index = currentIndex ?? 0
                return index === 0 ? images.length - 1 : index - 1
            })
        }
    }, [images.length])

    const showNext = useCallback(() => {
        if (images.length > 0) {
            setSelectedIndex((currentIndex) => {
                const index = currentIndex ?? 0
                return index === images.length - 1 ? 0 : index + 1
            })
        }
    }, [images.length])

    useEffect(() => {
        if (selectedIndex === null) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedIndex(null)
            } else if (event.key === "ArrowLeft") {
                showPrevious()
            } else if (event.key === "ArrowRight") {
                showNext()
            }
        }

        document.body.style.overflow = "hidden"
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = ""
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [selectedIndex, showNext, showPrevious])

    return (
        <section className="gallery" aria-label={title}>
            <header className="gallery-header">
                <h1>{title}</h1>
                {description && <p>{description}</p>}
            </header>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <button
                        className="gallery-item"
                        key={`${image.src}-${index}`}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        aria-label={`Open ${image.alt}`}
                    >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </button>
                ))}
            </div>

            {selectedImage && selectedIndex !== null && (
                <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setSelectedIndex(null)}>
                    <button className="gallery-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image viewer">
                        <X />
                    </button>
                    <button className="gallery-navigation gallery-previous" type="button" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Previous image">
                        <ChevronLeft />
                    </button>
                    <figure className="gallery-expanded" onClick={(event) => event.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <figcaption>{selectedImage.alt} <span>{selectedIndex + 1} / {images.length}</span></figcaption>
                    </figure>
                    <button className="gallery-navigation gallery-next" type="button" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Next image">
                        <ChevronRight />
                    </button>
                </div>
            )}
        </section>
    )
};
