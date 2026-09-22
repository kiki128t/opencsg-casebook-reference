import { useEffect, useState } from 'react'
import { Settings2, RotateCcw, ChevronUp } from 'lucide-react'
import { LEAD_KEY, LOGIN_KEY } from '../data/content'

export function emitDemoState() { window.dispatchEvent(new Event('opencsg-demo-state')) }

export default function DemoStatePanel() {
  const [open, setOpen] = useState(false)
  const [, refresh] = useState(0)
  useEffect(() => { const fn = () => refresh(x => x + 1); window.addEventListener('opencsg-demo-state', fn); window.addEventListener('storage', fn); return () => { window.removeEventListener('opencsg-demo-state', fn); window.removeEventListener('storage', fn) } }, [])
  const logged = localStorage.getItem(LOGIN_KEY) === 'true'
  const lead = localStorage.getItem(LEAD_KEY) === 'true'
  const reset = key => { localStorage.removeItem(key); emitDemoState() }
  return <aside className={`demo-panel ${open ? 'open' : ''}`}>
    <button className="demo-toggle" onClick={() => setOpen(v => !v)}><Settings2 size={16}/> Demo Controls <ChevronUp size={14}/></button>
    {open && <div className="demo-body"><p>仅用于研发验收</p><div><span>Login</span><b className={logged ? 'ok' : ''}>{logged ? 'Logged In' : 'Logged Out'}</b></div><button onClick={() => reset(LOGIN_KEY)}><RotateCcw size={14}/> 重置登录状态</button><div><span>Lead</span><b className={lead ? 'ok' : ''}>{lead ? 'Submitted' : 'Not Submitted'}</b></div><button onClick={() => reset(LEAD_KEY)}><RotateCcw size={14}/> 重置留资状态</button></div>}
  </aside>
}
