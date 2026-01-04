# Nova777

免费社交游戏应用 - 官方营销网站

## 🚀 技术栈

- **Gatsby 5** - 静态网站生成器和 React 框架
- **React 18** - UI 库
- **Node.js** - JavaScript 运行时
- **Gatsby Image Plugin** - 优化的图像处理
- **Gatsby Sharp** - 高性能图像处理
- **Netlify** - 部署和托管

## 📁 项目结构

```
nova777/
├── src/
│   ├── components/          # 可复用的 React 组件
│   │   ├── layout.js        # 主布局包装器
│   │   └── layout.css       # 布局样式
│   ├── pages/               # 页面组件（由 Gatsby 自动路由）
│   │   ├── index.js         # 主页
│   │   ├── about.js         # 关于页面
│   │   ├── blog.js          # 博客页面
│   │   ├── contact.js       # 联系页面
│   │   ├── games.js         # 游戏页面
│   │   └── [page].css       # 单独页面样式
│   ├── styles/              # 全局样式
│   │   └── global.css
│   └── assets/              # 图像和媒体
│       └── css/
├── static/                  # 静态文件（按原样提供）
├── public/                  # 构建输出（生成的）
├── gatsby-config.js         # Gatsby 配置
├── gatsby-node.js           # Gatsby Node API
├── netlify.toml             # Netlify 部署配置
└── package.json             # 项目依赖
```

## 🛠️ 安装

### 前提条件
- 已安装 Node.js 16+ 和 npm/yarn
- Git

### 步骤

1. **克隆存储库**
   ```bash
   git clone <repository-url>
   cd nova777
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **启动开发服务器**
   ```bash
   npm run develop
   # 或
   yarn develop
   ```
   网站将在 `http://localhost:8000` 可用

## 🚀 入门指南

### 可用命令

- **`npm run develop`** - 启动 Gatsby 开发服务器（热重载）
- **`npm run build`** - 创建优化的生产构建
- **`npm run serve`** - 本地提供生产构建
- **`npm run clean`** - 清理缓存和公共目录

## 📱 创建新页面

1. 在 `src/pages/` 中创建新的 `.js` 文件
2. 将 React 组件导出为默认
3. Gatsby 会自动创建与文件名匹配的路由

示例：`src/pages/new-page.js` → `/new-page/`

## 🎯 SEO 优化指南

### 1. **元标签和网站元数据**
使用您的网站信息更新 `gatsby-config.js`：
```javascript
siteMetadata: {
  title: "页面标题",
  description: "页面描述（建议 160 个字符）",
  siteUrl: "https://yourdomain.com",
  author: "@yourhandle"
}
```

### 2. **页面特定的元标签**
添加到每个页面组件：
```javascript
export const Head = () => (
  <>
    <title>页面标题 | 网站名称</title>
    <meta name="description" content="页面描述" />
    <meta name="og:title" content="页面标题" />
    <meta name="og:description" content="页面描述" />
    <meta name="og:url" content="https://yourdomain.com/page" />
  </>
)
```

### 3. **结构化数据 (Schema.org)**
添加 JSON-LD 用于丰富摘要：
```javascript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nova777",
  "url": "https://novaspin.com",
  "logo": "https://novaspin.com/logo.png"
}
</script>
```

### 4. **图像优化**
使用 `gatsby-plugin-image` 进行自动优化：
```javascript
import { StaticImage } from "gatsby-plugin-image"

<StaticImage src="../assets/image.jpg" alt="描述" />
```

### 5. **标题层级**
- 每个页面只使用一次 `<h1>`（主题）
- 遵循 h1 → h2 → h3 结构
- 自然地包含关键词

### 6. **URL 结构**
- 使用描述性、关键词丰富的 URL
- 小写、用连字符分隔单词
- 示例：`/free-online-games/` 而不是 `/page1/`

### 7. **内部链接**
链接相关页面以改进 SEO：
```javascript
import { Link } from "gatsby"

<Link to="/games/">热门游戏</Link>
```

### 8. **robots.txt 和网站地图**
Gatsby 会自动生成这些。添加到 `gatsby-config.js`：
```javascript
{
  resolve: `gatsby-plugin-sitemap`,
  options: {}
}
```

### 9. **性能（核心网络生命周期）**
- Gatsby 自动优化包分割
- 使用 `gatsby-plugin-image` 进行响应式图像
- 在 `gatsby-config.js` 中最小化 CSS/JS

### 10. **移动响应式**
- 使用 CSS 媒体查询
- 使用 DevTools 设备仿真进行测试
- 确保移动优先方法

## 🌐 部署

### 部署到 Netlify

1. 将代码推送到 Git 存储库
2. 将存储库连接到 Netlify
3. 构建设置：
   - 构建命令：`npm run build`
   - 发布目录：`public`
4. 推送时自动部署

## 📝 环境变量

为生产变量创建 `.env.production`：
```
GATSBY_API_URL=https://api.example.com
```

## 🤝 贡献

1. 创建功能分支：`git checkout -b feature/name`
2. 提交更改：`git commit -m "添加功能"`
3. 推送到源：`git push origin feature/name`
4. 打开拉取请求

## 📄 许可证

MIT 许可证 - 详见 LICENSE 文件

## ✉️ 支持

如有问题和疑问，请联系 support@nova777.com
