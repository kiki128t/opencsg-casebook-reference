import BookVisual from './BookVisual'
import { PrimaryButton } from './Buttons'

export default function CasebookEntry() {
  return <section className="container casebook-entry">
    <div className="entry-copy"><span className="eyebrow">OPENCSG CUSTOMER CASEBOOK</span><h2>OpenCSG 客户案例总册</h2><p className="entry-lead">25 个真实产业实践，<br/>记录 AI 从技术能力走向真实业务场景的落地路径。</p><div className="tag-row">{['智能制造','能源','生命科学','科研','城市数字化','AI 基础设施'].map(x => <span key={x}>{x}</span>)}</div><PrimaryButton to="#/cases/casebook/">查看案例总册</PrimaryButton></div>
    <BookVisual small />
  </section>
}
