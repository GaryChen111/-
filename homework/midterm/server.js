const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const FILE = "scores.json";

// 讀取分數
function readScores() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

// 存分數
function saveScores(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// 📥 上傳分數
app.post("/score", (req, res) => {
  const { name, score } = req.body;

  let scores = readScores();

  scores.push({
    name,
    score,
    time: new Date().toISOString()
  });

  // 排序
  scores.sort((a, b) => b.score - a.score);

  // 只保留前 10 名
  scores = scores.slice(0, 10);

  saveScores(scores);

  res.json({ success: true, scores });
});

// 📤 取得排行榜
app.get("/scores", (req, res) => {
  res.json(readScores());
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
