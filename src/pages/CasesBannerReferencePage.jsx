import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '../components/Layout'
import CasebookBanner from '../components/CasebookBanner'
import FeaturedCaseArticleCard from '../components/FeaturedCaseArticleCard'
import { BANNER_KEY, casebookBanner, featuredCaseArticles } from '../data/content'

const isBannerEnabled = () => localStorage.getItem(BANNER_KEY) !== 'false'

export default function CasesBannerReferencePage() {
  const [bannerEnabled, setBannerEnabled] = useState(isBannerEnabled)
  useEffect(() => {
    const sync = () => setBannerEnabled(isBannerEnabled())
    window.addEventListener('opencsg-demo-state', sync)
    window.addEventListener('storage', sync)
    return () => { window.removeEventListener('opencsg-demo-state', sync); window.removeEventListener('storage', sync) }
  }, [])
  return <PageShell><main className="cases-reference-page">
    <section className="reference-cases-section"><div className="container">
      <div className="reference-section-head"><div><h1>我们的客户</h1><p>连接与共建解决方案生态，携手合作伙伴，打造共创、共赢、共享的合作伙伴新生态。</p></div><div className="reference-actions"><a href="https://opencsg.com/cases" target="_blank" rel="noopener noreferrer">查看全部 <ArrowRight size={16}/></a><a className="partner" href="https://opencsg.com/agenticApply" target="_blank" rel="noopener noreferrer">成为合作伙伴 <ArrowRight size={16}/></a></div></div>
      <div className="reference-case-row">{featuredCaseArticles.slice(0,3).map(item => <FeaturedCaseArticleCard item={item} key={item.url}/>)}</div>
      {bannerEnabled && <CasebookBanner {...casebookBanner}/>} 
    </div></section>
  </main></PageShell>
}
