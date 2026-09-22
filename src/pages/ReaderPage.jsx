import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageShell } from '../components/Layout'
import PdfReader from '../components/PdfReader'
import { LEAD_KEY, LOGIN_KEY } from '../data/content'
import { triggerDownload } from './CasebookPage'

export default function ReaderPage() {
  const navigate=useNavigate(); const [ready,setReady]=useState(false)
  useEffect(()=>{ if(localStorage.getItem(LOGIN_KEY)!=='true') navigate('/login/?redirect=/cases/casebook/read/',{replace:true}); else setReady(true)},[navigate])
  const download=()=>localStorage.getItem(LEAD_KEY)==='true'?triggerDownload():navigate('/cases/casebook/download/')
  if(!ready) return null
  return <PageShell compactHeader footer={false}><section className="reader-page"><PdfReader onDownload={download}/></section></PageShell>
}
