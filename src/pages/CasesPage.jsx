import { PageShell } from '../components/Layout'
import CasebookEntry from '../components/CasebookEntry'
import CaseCard from '../components/CaseCard'
import { caseStudies } from '../data/content'

export default function CasesPage() { return <PageShell><section className="cases-hero"><div className="container cases-hero-grid"><div><span className="eyebrow">CUSTOMER STORIES</span><h1>OpenCSG<br/>客户案例中心</h1><p>了解 OpenCSG 如何助力千行百业客户实现数字化转型与智能化升级的实践与探索</p><a className="btn btn-primary" href="#/cases/casebook/">探索客户案例</a></div><div className="hero-prism"><i/><i/><i/><i/></div></div></section><CasebookEntry/><section className="section cases-list"><div className="container"><div className="section-head"><div><span className="eyebrow">CUSTOMER PRACTICE</span><h2>真实场景中的 AI 实践</h2><p>以下为案例结构与视觉参考，正式内容以业务审核为准。</p></div></div><div className="case-grid">{caseStudies.map((x,i) => <CaseCard item={x} key={i}/>)}</div></div></section></PageShell> }
