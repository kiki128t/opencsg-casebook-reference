import { Menu, X, ChevronDown, Github, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export function Header({ compact = false }) {
  const [open, setOpen] = useState(false)
  return <header className={`site-header ${compact ? 'compact' : ''}`}>
    <div className="header-inner">
      <a className="brand" href="#/cases/" aria-label="OpenCSG 首页"><img src="./assets/logo/opencsg-logo-official.png" alt="OpenCSG 开放传神" /></a>
      {!compact && <nav className={open ? 'nav open' : 'nav'} aria-label="主导航">
        {['模型', '数据', 'Agentic', '算力', '产品', '开源', '社区', '公司', 'AI 学堂'].map((item, i) => <a key={item} href={i === 7 ? '#/cases/' : '#/cases/'}>{item}{[2,3,4,5,6].includes(i) && <ChevronDown size={13}/>}</a>)}
      </nav>}
      <div className="header-actions">
        {!compact && <span className="site-switch">站点 <ChevronDown size={13}/></span>}
        <a className="login-link" href="#/login/">登录/注册</a>
        {!compact && <button className="menu-toggle" aria-label="切换导航" onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button>}
      </div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner">
    <div className="footer-brand"><img src="./assets/logo/opencsg-logo-official.png" alt="OpenCSG 开放传神"/><p>连接开放模型、数据与算力，让 AI 走进真实产业。</p></div>
    <div className="footer-links"><div><b>关于</b><a href="#/cases/">公司介绍</a><a href="#/cases/">客户案例</a></div><div><b>资源</b><a href="#/cases/">文档中心</a><a href="#/cases/">官方博客</a></div><div><b>连接</b><a href="https://github.com/OpenCSGs"><Github size={16}/>GitHub</a><a href="#/cases/"><MessageCircle size={16}/>联系我们</a></div></div>
  </div><div className="footer-bottom">© 2026 OpenCSG · 客户案例总册功能参考 Demo</div></footer>
}

export function PageShell({ children, compactHeader = false, footer = true }) {
  return <><Header compact={compactHeader}/><main>{children}</main>{footer && <Footer/>}</>
}
