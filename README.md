# HEIGHT Privacy Site

基于 Vite + NPM 的隐私政策静态站，用于 App Store / 产品页填写 Privacy Policy URL，并可通过 GitHub Pages 发布。

## 本地开发

```bash
cd web
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）。

## 构建

```bash
npm run build
```

产物在 `dist/`。

## 发布到 GitHub Pages

### 1. 准备仓库

将本仓库推送到 GitHub（例如仓库名为 `height`）。

若仓库名**不是** `height`，请修改 `vite.config.js` 中的 `base`，或构建时指定：

```bash
GH_PAGES_BASE=/你的仓库名/ npm run build
```

若使用 `username.github.io` 根仓库或自定义域名，使用：

```bash
GH_PAGES_BASE=/ npm run build
```

### 2. 一键部署

```bash
npm run deploy
```

该命令会构建并将 `dist` 推送到 `gh-pages` 分支。

然后在 GitHub 仓库 **Settings → Pages** 中，将 Source 设为 `gh-pages` 分支。

### 3. 访问地址

```
https://<你的用户名>.github.io/height/
```

将此 URL 填入 App Store Connect 的 Privacy Policy URL。

## 中英文切换

页眉右上角可切换 **中文 / English**，偏好会写入本地，并体现在 URL 参数（如 `?lang=en`）。

## 联系邮箱

当前联系邮箱：`bobojensen@163.com`

## 上线前请确认

1. `vite.config.js` 的 `base` 路径与真实 GitHub 仓库名一致
2. 页脚版权信息（如需）

## 技术栈

- Vite 6
- 原生 HTML / CSS / JS（中英双语切换）
- `gh-pages` 部署插件
