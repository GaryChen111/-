# 🏀 Basketball Shooting Game

一款使用 **HTML + CSS + JavaScript + Node.js Server** 製作的投籃遊戲。

玩家可以左右移動籃球並投籃，在限時內挑戰最高分數，並與全世界玩家競爭排行榜。

---

# 🎮 遊戲功能

* 🏀 投籃系統
* ⏱️ 倒數計時器
* 🔥 Combo 連續得分
* 📱 手機版控制
* 🏆 本地排行榜 + 🌐 網路排行榜
* 🎨 美化 UI
* ▶️ 開始畫面
* 🔁 再玩一次功能

---

# 📁 專案結構

```txt
basketball-game/
│
├── index.html
├── style.css
├── script.js
└── server/
    ├── server.js
    ├── scores.json
    └── package.json
```

---

# 🚀 如何執行（前端）

## 方法 1：直接開啟

直接雙擊：

```txt
index.html
```

即可遊玩。

---

## 方法 2：VS Code + Live Server（推薦）

右鍵 `index.html` → Open with Live Server

---

# 🌐 伺服器（公開排行榜 Server）

這個遊戲支援「網路排行榜」，需要 Node.js server。

---

# 🟢 1. 安裝 Server

進入 `server/` 資料夾後執行：

```bash
npm init -y
npm install express cors
```

---

# 🚀 2. 啟動 Server

```bash
node server.js
```

成功後會看到：

```txt
Server running on http://localhost:3000
```

---

# 📡 3. API 功能

## 📥 上傳分數

```http
POST /score
```

### 傳送資料

```json
{
  "name": "玩家名字",
  "score": 100
}
```

---

## 📤 取得排行榜

```http
GET /scores
```

回傳：

```json
[
  {
    "name": "AAA",
    "score": 120,
    "time": "2026-05-08T00:00:00Z"
  }
]
```

---

# 🧠 排行榜機制

* 分數會由高到低排序
* 只保留 Top 10
* 使用 JSON 檔儲存（簡易版資料庫）

---

# 🎮 遊戲操作

| 按鍵    | 功能   |
| ----- | ---- |
| ← →   | 左右移動 |
| Space | 投球   |
| 手機按鈕  | 觸控操作 |

---

# 🧠 遊戲規則

* 在時間內盡量得分
* 連續進球會增加 Combo
* Combo 越高分數越多
* 時間結束遊戲結束
* 可上傳分數到全球排行榜



```

---

# 🛠️ 使用技術

## 前端

* HTML5
* CSS3
* JavaScript
* Canvas API
* LocalStorage

## 後端

* Node.js
* Express
* CORS
* JSON File Storage

---

# 🌍 未來升級功能

* 🌐 Firebase 雲端排行榜（免自架 server）
* 🧑‍🤝‍🧑 即時多人對戰（WebSocket）
* 🎯 移動籃框
* 🧠 AI 守門員
* 🎬 開場動畫
* 🎵 背景音樂
* ⚡ 粒子特效
* 📱 PWA 手機安裝版
* 🏆 全球即時排名
* 🔐 登入系統

---
# 補充

沒有音效

---
Basketball Shooting Game
Made with ❤️ using HTML + JavaScript + Node.js

