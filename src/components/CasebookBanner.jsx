import { ArrowRight } from 'lucide-react'

export default function CasebookBanner({ eyebrow, title, subtitle, description, tags, coverImage, previewImages, ctaLabel, ctaUrl }) {
  return <section className="casebook-banner" aria-label="OpenCSG 客户案例总册入口">
    <div className="casebook-banner-copy">
      <span className="banner-eyebrow">{eyebrow}</span>
      <h2>{title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</h2>
      <h3>{subtitle.split('\n').map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</h3>
      <p>{description}</p>
      <div className="casebook-banner-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <a className="btn btn-primary casebook-banner-cta" href={ctaUrl}>{ctaLabel}<ArrowRight size={17}/></a>
    </div>
    <div className="casebook-banner-media" aria-label="案例总册封面与内页">
      <img className="banner-sheet banner-sheet-back" src={previewImages[1]} alt="案例总册章节内页"/>
      <img className="banner-sheet banner-sheet-mid" src={previewImages[0]} alt="案例总册产品能力内页"/>
      <img className="banner-sheet banner-sheet-cover" src={coverImage} alt="OpenCSG 客户案例总册封面"/>
    </div>
  </section>
}
