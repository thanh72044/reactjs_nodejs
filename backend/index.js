const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Cho phép React gọi API mà không bị lỗi CORS (sẽ học kỹ ở tuần 2)
app.use(cors());

// API Hello World
app.get('/api/hello', (req, res) => {
  res.send('Hello từ Server');
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
