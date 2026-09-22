import { ArrowUpRight } from 'lucide-react'
export default function RelatedResourceCard({ item }) {
  return <a className="resource-card" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`查看 ${item.title}`}>
    <span>{item.year}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight aria-hidden="true"/>
  </a>
}
