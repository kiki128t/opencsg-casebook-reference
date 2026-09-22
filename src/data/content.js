export const LOGIN_KEY = 'opencsg_demo_logged_in'
export const LEAD_KEY = 'opencsg_casebook_lead_submitted'

export const casebookContent = {
  hero: {
    eyebrow: '客户案例 · 2026',
    title: 'OpenCSG 客户案例总册',
    headline: '25 个真实产业实践\n看见 AI 从技术能力走向业务价值',
    description: '汇集 OpenCSG 在人工智能基础设施、智能制造、能源、生命科学、科研与城市数字化等领域的实践案例。',
  },
  preview: {
    title: '案例总册预览',
    description: '展示案例总册部分页面，便于了解整体内容结构。',
  },
  overview: {
    title: '25 个案例，记录 AI 的真实产业实践',
    stats: [
      { value: '25', label: '客户案例', featured: true },
      { value: '多个', label: '行业场景' },
      { value: 'AgenticOps', label: '实践方法论' },
      { value: 'OpenCSG', label: '产品能力' },
    ],
  },
  capabilitySection: {
    title: '从真实场景，看清 AI 落地路径',
    description: '每个案例围绕业务背景、关键挑战、解决方案与实施价值展开，并归纳四类可复用的实践能力。',
  },
  readerPrompt: {
    text: '继续浏览案例总册',
    action: '进入在线阅读',
  },
  login: {
    eyebrow: 'CUSTOMER CASEBOOK',
    title: '登录后进入\n客户案例总册',
    description: '本页模拟正式产品的登录与 redirect 回跳流程，不会提交任何真实账号信息。',
    readingLabel: '在线阅读',
    readingDescription: '查看案例总册全部页面',
  },
}

export const caseStudies = [
  { tag: 'AI 基础设施', name: 'Dell', title: 'AI 原生超节点', summary: '面向企业级 AI 基础设施的开放协同实践。', tone: 'blue', image: null, url: '#/cases/casebook/', linkLabel: '查看案例' },
  { tag: '能源', name: '中创新航', title: '储能智能运维', summary: '以智能化工作流连接设备、数据与运维流程。', tone: 'teal', image: null, url: '#/cases/casebook/', linkLabel: '查看案例' },
  { tag: '城市数字化', name: '宜昌', title: '城市级 AI 基础设施', summary: '探索区域算力协同与产业智能化的落地路径。', tone: 'cyan', image: null, url: '#/cases/casebook/', linkLabel: '查看案例' },
  { tag: '生命科学', name: '生命科学', title: '多组学科研工作流', summary: '让模型、数据与科研任务在统一环境中高效协作。', tone: 'navy', image: null, url: '#/cases/casebook/', linkLabel: '查看案例' },
  { tag: '科研', name: '科研机构', title: '大模型研发一体化', summary: '围绕安全、资产管理与研发协同构建实践体系。', tone: 'sky', image: null, url: '#/cases/casebook/', linkLabel: '查看案例' },
  { tag: '开放生态', name: '开源社区', title: '开放模型协作', summary: '连接模型、数据集与开发者，支持开放创新。', tone: 'mint', image: null, url: '#/cases/casebook/', linkLabel: '查看案例' },
]

export const previewPages = [
  { no: '01', title: '客户案例总册', src: './assets/casebook-preview/01-cover.webp' },
  { no: '02', title: '目录', src: './assets/casebook-preview/02-toc.webp' },
  { no: '03', title: 'OpenCSG 产品能力', src: './assets/casebook-preview/03-intro.webp' },
  { no: '04', title: '城市与公共 AI 基础设施', src: './assets/casebook-preview/04-section.webp' },
  { no: '05', title: '宜昌点军区案例', src: './assets/casebook-preview/05-case.webp' },
  { no: '06', title: '核心挑战', src: './assets/casebook-preview/06-background.webp' },
  { no: '07', title: '解决方案', src: './assets/casebook-preview/07-solution.webp' },
  { no: '08', title: '实施路径', src: './assets/casebook-preview/08-results.webp' },
]

export const capabilities = [
  { title: '企业 AI 基础设施', description: '呈现模型、数据、算力与研发流程如何在统一平台中协同。' },
  { title: '产业智能化', description: '记录智能体如何进入制造、能源等核心业务流程，连接系统与现场。' },
  { title: '城市与区域 AI', description: '展示区域算力、城市智能体及产业生态的建设与运营实践。' },
  { title: '科研与开放生态', description: '覆盖开放模型、数据协作与科研工作流，支持技术共享和成果转化。' },
]

export const relatedResources = [
  { year: '2026', title: 'AgenticOps 白皮书 2026', description: '从平台工程到智能体运营的实践框架', url: 'https://kiki128t.github.io/opencsg-whitepaper-site/whitepapers/agenticops-2026/' },
  { year: '2025', title: 'OpenCSG 企业白皮书 2025', description: '企业 AI 基础设施演进与产业观察', url: 'https://kiki128t.github.io/opencsg-whitepaper-site/whitepapers/agenticops-2025/' },
  { year: '2024', title: 'OpenCSG 2024 系列产品白皮书', description: '模型、数据与算力协同的产品实践', url: 'https://kiki128t.github.io/opencsg-whitepaper-site/whitepapers/opencsg-2024/' },
]
