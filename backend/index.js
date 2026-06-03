const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 5000;
const MONGODB_URL = 'mongodb+srv://thanhle:thanh7204@cluster0.wvh9y.mongodb.net/movies_db?appName=Cluster0'
mongoose.connect(MONGODB_URL).then(() => console.log('thành công kết nối')).catch((eror) => console.log('lỗi kết nối mongo', eror))

const movieSchema = new mongoose.Schema({
  title: String,
  image: String
})
const Movie = mongoose.model('movie', movieSchema)

app.use(cors());
app.use(express.json())


app.get('/api/movies', async (req, res) => {
  try {
    const movies = await
      Movie.find()
    res.json(movies)
  } catch (error) {
    res.status(500).json('lỗi khi lấy dữ liệu')
  }
});
app.post('/api/postMovie', async (req, res) => {
  try {
    const newMovie = await
      Movie.create({
        title: req.body.title,
        image: req.body.image
      })
    res.json('đã thêm phim thành công')
  } catch (error) {
    res.status(500).json('lỗi thêm dữ liệu')
  }
});
app.delete('/api/movies/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Movie.findByIdAndDelete(id)
    res.json("đã xóa thành công")
  } catch (error) {

    res.status(500).json("lỗi khi xóa dữ liệu")
  }
})

app.put('/api/updateMovies/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateMovie = await Movie.findByIdAndUpdate(id, {
      title: req.body.title,
      image: req.body.image
    }, { new: true })
    res.json("cập nhật phim thành công")
  } catch (error) {
    res.status(500).json("lỗi khi cậu nhậ̀t dữ liệu")
  }
})
app.get('/api/movies/:id', async (req, res) => {
  try {
    const id = req.params.id
    const movie = await Movie.findById(id)
    res.json(movie)
  } catch (error) {
    res.status(500).json('lỗi khi lấy dữ liệu')
  }
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
