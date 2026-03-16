# Portal

類似 Linktree 的個人入口頁面，將所有網站集中在一處，讓使用者不需要記住每個網址。

---

## 專案結構

```
portal/
├── index.html    # 主頁面
├── config.js     # 網站連結與個人資訊設定檔
└── README.md
```

---

## 功能

- **分類篩選**：點擊標籤快速篩選網站類別
- **即時搜尋**：輸入關鍵字同時比對標題與描述
- **響應式排版**：桌機 3 欄 → 平板 2 欄 → 手機 1 欄
- **卡片動畫**：Hover 上浮效果與淡入動畫
- 純靜態頁面，無需後端，可直接部署至 GitHub Pages 等靜態空間

---

## 如何新增或修改網站連結

編輯 `config.js`，在 `links` 陣列中新增一筆物件：

```js
{
  title: "我的新網站",
  description: "這個網站的一句話描述",
  url: "https://your-url.com",
  emoji: "🌟",
  color: "#FF6B6B",   // 卡片左側強調色（十六進位色碼）
  category: "其他",   // 需與 categories 陣列中的項目相符
},
```

### 新增分類

在 `config.js` 的 `categories` 陣列加入新標籤：

```js
categories: ["全部", "資料分析", "系統工具", "爬蟲", "其他", "新分類"],
```

### 修改個人資訊

```js
profile: {
  avatar: "👨‍💻",  // emoji 或圖片 URL（https://... / ./image.png）
  name: "My Portal",
  tagline: "所有我的網站，一個入口就夠了 🚀",
},
```

---

## 開發說明

純 HTML + CSS + JavaScript，無需安裝任何套件，直接以瀏覽器開啟 `index.html` 即可預覽。