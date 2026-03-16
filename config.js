/**
 * Portal 設定檔
 * 在這裡修改個人資訊與網站連結
 */
const siteConfig = {

  // ── 個人資訊 ──────────────────────────────────────────────────────────
  profile: {
    avatar: "👨‍💻",          // 可換成圖片 URL，例如 "https://example.com/avatar.jpg"
    name: "Feng's Portal",
    // 打字機會依序循環顯示這些句子，只寫一句則只打一次不循環
    taglines: [
      "全部網站，一個入口 🚀",
      "不用再記網址了 👍🏻",
      "希望一個禮拜開發一個小功能 😎",
    ],
  },

  // ── 分類標籤（第一個務必保留「全部」）────────────────────────────────
  categories: ["全部", "資料分析", "小工具", "爬蟲", "其他"],

  // ── 網站連結 ──────────────────────────────────────────────────────────
  // emoji   : 卡片圖示（可用 emoji 或移除改用圖片）
  // color   : 卡片左側強調色
  // category: 必須與上方 categories 其中一項相符
  links: [
    {
      title: "DKG 帳本",
      description: "家庭成員貢獻視覺化",
      url: "https://1idbrq72a8pj.share.zrok.io/summary/",
      emoji: "📒",
      color: "#4ECDC4",
      category: "小工具",
    },
    {
      title: "先生人臉記憶",
      description: "記住日本老師的臉",
      url: "https://xvza2dgdbig3.share.zrok.io/",
      emoji: "😊",
      color: "#3B82F6",
      category: "小工具",
    },
    {
      title: "Duolingo 學習視覺化",
      description: "將 Duolingo 學習紀錄視覺化，追蹤語言學習進度",
      url: "https://chunfeng510.github.io/duolingo-visualize/",
      emoji: "📚",
      color: "#58CC02",
      category: "資料分析",
    },  
    {
      title: "Dcard 房屋爬蟲",
      description: "自動抓取 Dcard 房屋租售資訊並進行分析",
      url: "#",
      emoji: "🏠",
      color: "#FF6B6B",
      category: "爬蟲",
    },
  ],
};
