import { useState } from 'react'
import articles from '../assets/data/articles.json'
import fuzPdf from '../assets/pdf/FUZ_2026.pdf'
import './ArticlesPage.scss'

interface DateFormatterProps {
  dateString: string;
}

export const ArticlesPage = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggle = (id: number) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  const openPdf = () => window.open(fuzPdf, '_blank', 'noopener,noreferrer')

  return (
    <div className="articles-page">
      <div className="articles-page-header">
        <div>
          <p className="articles-page-eyebrow">Nachrichten und Berichte</p>
          <h1>Artikel</h1>
          <p>Entdecke unsere aktuellen Beiträge und die digitale Ausgabe der FUZ.</p>
        </div>
        <button type="button" className="pdf-toggle" onClick={openPdf}>
          FUZ als PDF anzeigen
        </button>
      </div>
      
      <div className="articles-list">
        {articles.map((article) => {
          const isExpanded = !!expanded[article.id]
          return (
            <article className="article-card" key={article.id}>
              <h2>{article.title}</h2>
              <p className={`article-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {article.content}
              </p>
              <button type="button" className="article-toggle" onClick={() => toggle(article.id)}>
                {isExpanded ? 'Weniger anzeigen' : 'Weiterlesen'}
              </button>
              <p className="article-meta">
                <span>{article.author}</span>
                <DateFormatter dateString={article.date} />
              </p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = new Date(dateString);
  return <time dateTime={dateString}>{date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</time>;
}