import { ArrowUpRight } from 'lucide-react'

export default function FeaturedCaseArticleCard({ item }) {
  const content = <>
    <div className="featured-article-cover"><img src={item.image} alt={`${item.title}案例封面`}/></div>
    <div className="featured-article-body">
      <div className="featured-article-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <ArrowUpRight className="featured-article-arrow" size={18} aria-hidden="true"/>
    </div>
  </>
  return item.url
    ? <a className="featured-article-card" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`查看案例：${item.title}`}>{content}</a>
    : <article className="featured-article-card is-disabled" aria-label={`${item.title}，链接待配置`}>{content}</article>
}
