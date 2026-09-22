import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, LockKeyhole, ShieldCheck } from 'lucide-react'
import { casebookContent, LOGIN_KEY } from '../data/content'
import { emitDemoState } from '../components/DemoStatePanel'

export default function LoginPage() {
  const navigate=useNavigate(), location=useLocation(); const target=new URLSearchParams(location.search).get('redirect') || '/cases/casebook/'
  const { login: copy } = casebookContent
  useEffect(() => { if(localStorage.getItem(LOGIN_KEY)==='true') navigate(target,{replace:true}) }, [navigate,target])
  const login=()=>{localStorage.setItem(LOGIN_KEY,'true');emitDemoState();navigate(target,{replace:true})}
  return <main className="login-page"><a className="login-brand" href="#/cases/"><img src="./assets/logo/opencsg-logo-official.png" alt="OpenCSG 开放传神"/></a><div className="login-layout"><section className="login-intro"><span className="eyebrow light">{copy.eyebrow}</span><h1>{copy.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</h1><p>{copy.description}</p><div><ShieldCheck/><span><b>{copy.readingLabel}</b>{copy.readingDescription}</span></div><div><LockKeyhole/><span><b>状态隔离</b>阅读权限与下载留资相互独立</span></div></section><section className="login-card"><a href="#/cases/casebook/"><ArrowLeft size={16}/> 返回案例总册</a><span className="login-icon"><LockKeyhole/></span><h2>欢迎回来</h2><p>Demo 登录将写入本地状态，并自动返回阅读器。</p><label>账号<input value="demo@opencsg.com" readOnly/></label><label>密码<input type="password" value="opencsgdemo" readOnly/></label><button className="btn btn-primary" onClick={login}>Demo 登录</button><small>无需真实账号 · 仅用于产品流程体验</small></section></div></main>
}
