import { useNavigate } from 'react-router-dom'
import { Building2, Factory, Landmark, FlaskConical, ArrowRight } from 'lucide-react'
import { PageShell } from '../components/Layout'
import CasebookHero from '../components/CasebookHero'
import PreviewGallery from '../components/PreviewGallery'
import FeaturedCaseArticleCard from '../components/FeaturedCaseArticleCard'
import RelatedResourceCard from '../components/RelatedResourceCard'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { capabilities, casebookContent, featuredCaseArticles, LEAD_KEY, LOGIN_KEY, relatedResources } from '../data/content'

const capIcons = [Building2, Factory, Landmark, FlaskConical]
export default function CasebookPage() {
  const navigate = useNavigate()
  const read = () => localStorage.getItem(LOGIN_KEY) === 'true' ? navigate('/cases/casebook/read/') : navigate('/login/?redirect=/cases/casebook/read/')
  const download = () => localStorage.getItem(LEAD_KEY) === 'true' ? triggerDownload() : navigate('/cases/casebook/download/')
  return <PageShell><CasebookHero onRead={read} onDownload={download}/><section className="section overview"><div className="container"><div className="section-head centered"><h2>{casebookContent.overview.title}</h2></div><div className="stats-grid">{casebookContent.overview.stats.map(stat => <article className={`stat-card ${stat.featured ? 'featured' : ''}`} key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div></div></section><section className="section capabilities"><div className="container"><div className="section-head"><h2>{casebookContent.capabilitySection.title}</h2><p>{casebookContent.capabilitySection.description}</p></div><div className="cap-grid">{capabilities.map((capability,i) => { const Icon=capIcons[i]; return <article key={capability.title}><div className="cap-icon"><Icon/></div><span>0{i+1}</span><h3>{capability.title}</h3><p>{capability.description}</p><ArrowRight/></article>})}</div></div></section><PreviewGallery/><section className="full-read-prompt"><div><p>{casebookContent.readerPrompt.text}</p><button onClick={read}>{casebookContent.readerPrompt.action} <ArrowRight size={17}/></button></div></section><section className="section featured"><div className="container"><div className="section-head"><h2>精选客户实践</h2></div><div className="featured-case-grid">{featuredCaseArticles.map(item => <FeaturedCaseArticleCard item={item} key={item.url}/>)}</div><div className="featured-more"><a href="https://opencsg.com/cases" target="_blank" rel="noopener noreferrer">查看更多客户案例 <ArrowRight size={17}/></a></div></div></section><section className="download-cta"><div className="container"><div><h2>获取《OpenCSG 客户案例总册》</h2><p>了解 OpenCSG 在不同产业场景中的 AI 落地实践。</p></div><div><SecondaryButton onClick={read}>在线阅读</SecondaryButton><PrimaryButton onClick={download} icon="download">立即下载</PrimaryButton></div></div></section><section className="section related"><div className="container"><div className="section-head"><h2>相关推荐</h2></div><div className="resource-grid">{relatedResources.map(x => <RelatedResourceCard item={x} key={x.url}/>)}</div></div></section></PageShell>
}

export function triggerDownload() {
  const a=document.createElement('a'); a.href='./assets/casebook/OpenCSG-Customer-Casebook.pdf'; a.download='OpenCSG-Customer-Casebook-Demo.pdf'; document.body.appendChild(a); a.click(); a.remove()
}
