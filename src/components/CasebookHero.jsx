import BookVisual from './BookVisual'
import { PrimaryButton, SecondaryButton } from './Buttons'
import { casebookContent } from '../data/content'

export default function CasebookHero({ onRead, onDownload }) {
  const { hero } = casebookContent
  return <section className="casebook-hero"><div className="container hero-grid">
    <div className="hero-copy"><span className="eyebrow">{hero.eyebrow}</span><h1>{hero.title.split(' ').map((part, index) => <span key={part}>{index > 0 && <br/>}{part}</span>)}</h1><h2>{hero.headline.split('\n').map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</h2><p>{hero.description}</p><div className="hero-actions"><PrimaryButton onClick={onRead}>在线阅读</PrimaryButton><SecondaryButton onClick={onDownload} icon="download">立即下载</SecondaryButton></div></div>
    <BookVisual />
  </div></section>
}
