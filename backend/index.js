const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
const User = mongoose.model('user', userSchema)

app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username })
    if (existingUser) {
      return res.status(400).json('tên đăng nhập đã tồn tại')
    }
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound)
    const newUser = await
      User.create({
        username: username,
        password: hashPassword
      })
    res.json('đăng ký thành công')
  } catch (error) {
    res.status(500).json('lỗi khi lấy dữ liệu')
  }
})

const JWT_SECRET = 'VURVPcnfhjWFHWOEE121!@$#$'

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split("")[1];
  if (!token) {
    return res.status(401).json("không có quyền truy cập,vui lòng đăng nhập")
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(500).json("token không hợp lệ hoặc đã hết hạn")
  }

}

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username })
    if (!user) {
      return res.status(400).json('sai tên đăng nhập')
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json('sai mật khẩu')
    }
    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    )
    res.json({
      message: "đăng nhập thành công",
      token: token
    })

  } catch (error) {
    res.status(500).json('lỗi khi lấy dữ liệu')
  }

})

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
app.delete('/api/movies/:id',authMiddleware, async (req, res) => {
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
