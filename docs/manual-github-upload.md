# 人工上传 GitHub 与发布 Pages

## 推荐方式：本地 Git 推送

1. 在 GitHub 创建一个空的公开仓库，建议名称：`opencsg-casebook-reference`。
2. 解压交付包并进入项目目录。
3. 执行：

```bash
git init
git branch -M main
git add .
git commit -m "Initial OpenCSG casebook demo"
git remote add origin https://github.com/<YOUR_USERNAME>/opencsg-casebook-reference.git
git push -u origin main
```

4. 打开 GitHub 仓库的 **Settings → Pages**。
5. 在 **Build and deployment** 中选择 **GitHub Actions**。
6. 仓库内的 `.github/workflows/deploy.yml` 会自动构建并发布网站。

发布地址通常为：

`https://<YOUR_USERNAME>.github.io/opencsg-casebook-reference/`

## 浏览器手动上传

也可以解压后，在空仓库选择 **Add file → Upload files**，上传解压后的全部内容并提交到 `main` 分支。请特别确认隐藏目录 `.github/workflows/` 已上传，否则 Pages 不会自动部署。

## 上传前后检查

- 不要只上传 ZIP 文件；GitHub 不会自动解压仓库中的 ZIP。
- 根目录应能看到 `package.json`、`index.html`、`src/`、`public/` 和 `.github/`。
- Actions 页面中的 `Deploy GitHub Pages` 工作流应成功完成。
- Demo 使用 HashRouter，业务页面地址形如 `/#/cases/casebook/`，刷新不会产生 404。
