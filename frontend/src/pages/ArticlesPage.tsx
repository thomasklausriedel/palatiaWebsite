import { useState } from 'react'
import articles from '../assets/data/articles.json'
import './ArticlesPage.scss'

interface DateFormatterProps {
  dateString: string;
}

export const ArticlesPage = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggle = (id: number) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <>
      {articles.map((article) => {
        const isExpanded = !!expanded[article.id]
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p className={`article-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
              {article.content}
            </p>
            <button onClick={() => toggle(article.id)}>{isExpanded ? 'Show less' : 'Continue reading'}</button>
            <p>{article.author}</p>
            <DateFormatter dateString={article.date} />
          </div>
        )
      })}
    </>
  )
}

const DateFormatter = ({ dateString } : DateFormatterProps) => {
  const date = new Date(dateString);
  return <time dateTime={dateString}>{date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</time>;
}