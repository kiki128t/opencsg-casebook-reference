import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, CircleCheckBig } from 'lucide-react'
import { PageShell } from '../components/Layout'
import BookVisual from '../components/BookVisual'
import LeadForm from '../components/LeadForm'
import { LEAD_KEY } from '../data/content'
import { triggerDownload } from './CasebookPage'

export default function DownloadPage() {
  const navigate=useNavigate(), [done,setDone]=useState(false)
  useEffect(()=>{ if(localStorage.getItem(LEAD_KEY)==='true'){ triggerDownload(); navigate('/cases/casebook/',{replace:true}) } },[navigate])
  const success=()=>{setDone(true); setTimeout(triggerDownload,400)}
  return <PageShell compactHeader footer={false}><section className="download-page"><div className="download-layout"><section className="download-intro"><a href="#/cases/casebook/">← 返回案例总册</a><BookVisual small/><div><span className="eyebrow light">OPENCSG CASEBOOK 2026</span><h1>OpenCSG 客户案例总册</h1><h2>25 个真实产业实践</h2><p>覆盖制造、能源、科研、城市数字化、生命科学与 AI 基础设施等领域。</p><h3>你将在案例总册中看到</h3><ul>{['客户背景','业务挑战','解决方案','实施路径','效果与价值'].map(x=><li key={x}><CircleCheckBig/>{x}</li>)}</ul></div></section><section className="form-wrap">{done ? <div className="success-card"><CheckCircle2/><span className="eyebrow">DOWNLOAD READY</span><h2>提交成功</h2><p>《OpenCSG 客户案例总册》正在下载</p><button className="btn btn-primary" onClick={triggerDownload}>下载未开始？手动下载</button><a href="#/cases/casebook/">返回案例总册</a></div> : <LeadForm onSuccess={success}/>}</section></div></section></PageShell>
}
