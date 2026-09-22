import { useState } from 'react'
import { Check, Mail, UserRound, Building2, BriefcaseBusiness, Phone } from 'lucide-react'
import { LEAD_KEY } from '../data/content'
import { emitDemoState } from './DemoStatePanel'

const interests = ['AI 基础设施', '企业 Agent', '模型与数据资产管理', '算力', '行业 AI 应用', '其他']

export default function LeadForm({ onSuccess }) {
  const [selected, setSelected] = useState([])
  const [errors, setErrors] = useState({})
  const submit = e => {
    e.preventDefault(); const form = new FormData(e.currentTarget); const next = {}
    if (!form.get('name')?.trim()) next.name = '请填写姓名'
    if (!form.get('company')?.trim()) next.company = '请填写公司 / 机构'
    if (!/^\S+@\S+\.\S+$/.test(form.get('email') || '')) next.email = '请填写有效的工作邮箱'
    if (!/^1?\d{7,14}$/.test((form.get('phone') || '').replace(/[\s-]/g,''))) next.phone = '请填写有效手机号'
    setErrors(next); if (Object.keys(next).length) return
    localStorage.setItem(LEAD_KEY, 'true'); emitDemoState(); onSuccess()
  }
  return <form className="lead-form" onSubmit={submit} noValidate><span className="eyebrow">GET THE CASEBOOK</span><h2>获取案例总册</h2><p>填写信息后，案例总册将自动开始下载。</p>
    <Field name="name" label="姓名" icon={<UserRound/>} required error={errors.name}/><Field name="company" label="公司 / 机构" icon={<Building2/>} required error={errors.company}/><Field name="role" label="职位" icon={<BriefcaseBusiness/>}/><Field name="email" type="email" label="工作邮箱" icon={<Mail/>} required error={errors.email}/><Field name="phone" type="tel" label="手机号" icon={<Phone/>} required error={errors.phone}/>
    <fieldset><legend>您目前关注的方向</legend><div className="interest-grid">{interests.map(x => <label key={x} className={selected.includes(x) ? 'selected' : ''}><input type="checkbox" value={x} onChange={e => setSelected(e.target.checked ? [...selected, x] : selected.filter(i => i !== x))}/><Check size={14}/>{x}</label>)}</div></fieldset>
    <button className="btn btn-primary submit-btn" type="submit">获取案例总册</button><small className="form-note">提交即表示您同意 OpenCSG 按隐私政策处理以上信息。本页面为 Demo，不会发送数据。</small>
  </form>
}

function Field({ name, label, icon, required, error, type='text' }) { return <label className={`field ${error ? 'error' : ''}`}><span>{label}{required && ' *'}</span><div>{icon}<input name={name} type={type} placeholder={`请输入${label}`}/></div>{error && <em>{error}</em>}</label> }
