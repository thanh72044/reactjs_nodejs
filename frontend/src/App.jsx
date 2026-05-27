import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setmovies] = useState([])
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  useEffect(() => {
    fetch('http://localhost:5000/api/movies').then(Response => {
      return Response.json()
    }).then(data => {
      setmovies(data)
    }).catch(error => {
      console.log("lỗi API", error)
    })
  }, [])
  const handleMovies = (e) => {
    e.preventDefault()
    const dataToSend = {
      title: title,
      image: image
    }
    fetch('http://localhost:5000/api/postMovie', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(dataToSend)
    }).then(Response => {
      return Response.json()
    }).then(data => {
      console.log("server trả lời", data)
      alert("thêm phim thành công")
      setTitle('')
      setImage('')
      window.location.reload()
    })
      .catch(error => console.log("lỗi API", error))
  }
  return (
    <div>
      <h1>thông điệp từ backend</h1>
      <form onSubmit={handleMovies}>
        <input type="text" placeholder='tên phim' value={title} onChange={((e) => setTitle(e.target.value))} />
        <input type="text" placeholder='hình ảnh' value={image} onChange={((e) => setImage(e.target.value))} />
        <button type='submit'>thêm phim</button>
      </form>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid white', padding: '10px', width: '200px' }}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  )

}
export default App
