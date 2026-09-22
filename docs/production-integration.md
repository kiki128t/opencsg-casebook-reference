# 正式研发对接说明

## Demo 与正式产品边界

本项目是纯前端参考 Demo。表单不会向任何服务发送数据，登录和留资状态只保存在当前浏览器的 `localStorage`。阅读与下载已接入用户提供的 106 页正式案例总册文件，但静态 Demo 无法提供真正的服务端资源鉴权。

正式上线时需要删除 `DemoStatePanel`，并用服务端可信状态替换所有本地判断。

## 需要接入的服务

### AUTH API

- 完成真实登录、退出、Token / Cookie 刷新。
- 登录成功后只接受站内白名单 redirect，防止开放重定向。
- 阅读器路由由服务端或边缘层再次校验会话。

### USER API

- 返回当前用户与组织信息。
- 可用于预填留资表单，但不得把“已登录”等同于“已留资”。

### LEAD API / CRM

- 接收姓名、公司、职位、工作邮箱、手机号与关注方向。
- 明确隐私授权、用途、数据保留周期与 CRM 字段映射。
- 使用幂等键避免重复线索；返回独立的 casebook download entitlement。

### PDF ACCESS API

- 在线阅读使用受控页面数据或短期页面图片授权，不嵌入可直接下载的原生 PDF Viewer。
- 鉴权需要区分 read entitlement 与 download entitlement。
- 记录页面访问与授权失败事件，避免在前端暴露永久资源地址。

### DOWNLOAD API

- 校验 lead entitlement 后签发短时效、单用途下载 URL。
- 记录用户、资源版本、时间和来源入口。
- 对重复下载复用权限，但仍由服务端校验，不依赖浏览器状态。

## 推荐状态模型

```ts
type CasebookAccess = {
  authenticated: boolean
  canReadOnline: boolean
  leadSubmitted: boolean
  canDownload: boolean
  resourceVersion: string
}
```

`authenticated` 与 `leadSubmitted` 必须由不同服务来源维护，前端仅根据聚合结果显示入口。

## 资源替换

- 将静态文件 `public/assets/casebook/OpenCSG-Customer-Casebook.pdf` 迁移到受鉴权的对象存储 / CDN，并由 DOWNLOAD API 签发短期地址。
- 当前公开预览图来自正式 PDF 前 8 页；正式发布前确认公开范围，必要时按 `public/assets/casebook-preview/README.md` 调整页面。
- 将精选案例摘要、封面、相关推荐与链接接入 CMS。
