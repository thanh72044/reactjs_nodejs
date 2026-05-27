const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Cho phép React gọi API mà không bị lỗi CORS (sẽ học kỹ ở tuần 2)
app.use(cors());
app.use(express.json())

// API Hello World
app.get('/api/hello', (req, res) => {
  res.send('Hello từ Server');
});
app.get('/api/movies', (req, res) => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDItN2IxOS00MTFiLTgwMzYtZTFkMTAxYzViZWIyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    }
  ];

  res.json(movies)
})
app.post('/api/postMovie', (req, res) => {
  console.log("dữ liệu nhận được", req.body)
  console.log("đã nhận được dữ liệu")
  res.json("đã thêm phim thành công")
});
// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
