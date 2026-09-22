import { ArrowUpRight } from 'lucide-react'

export default function CaseCard({ item }) {
  return <article className={`case-card tone-${item.tone}`}>
    <div className={`case-visual ${item.image ? 'has-image' : ''}`}>{item.image && <img src={item.image} alt=""/>}<span>OpenCSG</span><b>{item.name}</b><small>{item.tag}</small></div>
    <div className="case-copy"><span className="pill">{item.tag}</span><h3>{item.title}</h3><p>{item.summary}</p><a href={item.url}>{item.linkLabel} <ArrowUpRight size={15}/></a></div>
  </article>
}
