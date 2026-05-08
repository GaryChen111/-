const canvas = document.getElementById("gameCanvas");

  // 地板
  ctx.fillStyle = "green";
  ctx.fillRect(0, 450, 800, 50);

  // 籃板
  ctx.fillStyle = "black";
  ctx.fillRect(730, 150, 10, 100);

  // 籃框
  ctx.fillStyle = "red";
  ctx.fillRect(hoop.x, hoop.y, hoop.width, hoop.height);

  // 球
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.closePath();
// 上傳分數到 server
async function uploadScore(name, score) {
  await fetch("http://localhost:3000/score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, score })
  });

  loadOnlineLeaderboard();
}
}

function gameLoop() {

  if (!gameStarted) return;

  update();
  draw();

  requestAnimationFrame(gameLoop);
}

// 排行榜

function saveScore(newScore) {

  let scores = JSON.parse(localStorage.getItem("basketballScores")) || [];

  scores.push(newScore);

  scores.sort((a, b) => b - a);

  scores = scores.slice(0, 5);

  localStorage.setItem("basketballScores", JSON.stringify(scores));
}

function loadLeaderboard() {

  let scores = JSON.parse(localStorage.getItem("basketballScores")) || [];

  const list = document.getElementById("leaderboardList");

  list.innerHTML = "";

  scores.forEach(score => {
    const li = document.createElement("li");
    li.innerText = score + " 分";
    list.appendChild(li);
  });
}
async function loadOnlineLeaderboard() {
  const res = await fetch("http://localhost:3000/scores");
  const data = await res.json();

  const list = document.getElementById("leaderboardList");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ${item.score}`;
    list.appendChild(li);
  });
}
loadLeaderboard();
let name = prompt("輸入名字：");

if (name) {
  uploadScore(name, score);
}
