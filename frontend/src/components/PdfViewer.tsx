import { useEffect, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import "./PdfViewer.scss"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString()

interface PdfViewerProps {
    file: string
    title: string
}

export const PdfViewer = ({ file, title }: PdfViewerProps) => {
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState(1)
    const [pageHeight, setPageHeight] = useState(() => Math.max(240, window.innerHeight - 360))

    useEffect(() => {
        const updatePageHeight = () => setPageHeight(Math.max(240, window.innerHeight - 360))

        window.addEventListener("resize", updatePageHeight)
        return () => window.removeEventListener("resize", updatePageHeight)
    }, [])

    const goToPreviousPage = () => setPageNumber((page) => Math.max(page - 1, 1))
    const goToNextPage = () => setPageNumber((page) => Math.min(page + 1, numPages ?? page))

    return (
        <section className="pdf-viewer" aria-label={`${title} PDF viewer`}>
            <div className="pdf-viewer-header">
                <div>
                    <p className="pdf-viewer-eyebrow">Digitale Ausgabe</p>
                    <h2>{title}</h2>
                </div>
                {numPages && (
                    <span className="pdf-viewer-page-status">
                        Seite {pageNumber} von {numPages}
                    </span>
                )}
            </div>

            <div className="pdf-viewer-document">
                <Document
                    file={file}
                    onLoadSuccess={({ numPages: loadedPages }) => {
                        setNumPages(loadedPages)
                        setPageNumber(1)
                    }}
                    loading={<p className="pdf-viewer-message">PDF wird geladen …</p>}
                    error={<p className="pdf-viewer-message">Die PDF konnte nicht geladen werden.</p>}
                >
                    <Page pageNumber={pageNumber} height={pageHeight} />
                </Document>
            </div>

            {numPages && (
                <div className="pdf-viewer-controls">
                    <button type="button" onClick={goToPreviousPage} disabled={pageNumber === 1}>
                        Zurück
                    </button>
                    <button type="button" onClick={goToNextPage} disabled={pageNumber === numPages}>
                        Weiter
                    </button>
                </div>
            )}
        </section>
    )
}