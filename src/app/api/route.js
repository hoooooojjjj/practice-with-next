// route.js
// Express.js 모듈 불러오기
const express = require("express");

// Express 앱 생성
const app = express();

// POST 요청 처리
app.post("/username", (req, res) => {
  const username = req.body.username;
  const responseData = { username: username }; // JSON 형식의 데이터 생성
  res.json(responseData); // JSON 형식의 데이터 응답
});

// 서버 시작
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
