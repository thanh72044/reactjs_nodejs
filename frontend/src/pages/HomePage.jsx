import { useState, useEffect } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api'
function HomePage() {
    const { token, logout } = useContext(AuthContext)
    const [editingId, seteditingId] = useState(null)
    const [movies, setmovies] = useState([])
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch(`${API_URL}/movies`).then(Response => {
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
        fetch(`${API_URL}/postMovie`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataToSend)
        }).then(Response => {
            return Response.json()
        }).then(data => {
            console.log("server trả lời", data)
            alert("thêm phim thành công")
            setTitle('')
            setImage('')
            fetch(`${API_URL}/movies`).then(Response => {
                return Response.json()
            }).then(data => {
                setmovies(data)
            })
        })
            .catch(error => console.log("lỗi API", error))
    }
    const handleDelete = (id) => {
        fetch(`${API_URL}/movies/` + id, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(Response => {
            return Response.json()
        }).then(data => {
            alert("xóa phim thành công")
            fetch(`${API_URL}/movies`).then(Response => {
                return Response.json()
            }).then(data => {
                setmovies(data)
            })
        })
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        const dataToSend = {
            title: title,
            image: image
        }
        fetch(`${API_URL}/updateMovies/` + editingId, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataToSend)
        }).then(Response => {
            return Response.json()
        }).then(data => {
            alert('cập nhật phim thành công')
            seteditingId(null)
            setTitle('')
            setImage('')
            fetch('http://localhost:5000/api/movies').then(Response => {
                return Response.json()
            }).then(data => {
                setmovies(data)
            })
        }).catch(error => console.log("lỗi API", error))
    }
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
        navigate('/login')
    }
    return (
        <div className="app-container">
            <h1 style={{ marginBottom: '2rem' }}>Thư Viện Phim</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Thư Viện Phim</h1>
                <button className="btn-danger" onClick={handleLogout} style={{ width: 'auto', margin: 0 }}>
                    Đăng xuất
                </button>
            </div>

            <form className="add-movie-form" onSubmit={editingId ? handleUpdate : handleMovies}>
                <input className="input-field" type="text" placeholder='Tên phim' value={title} onChange={((e) => setTitle(e.target.value))} />
                <input className="input-field" type="text" placeholder='URL hình ảnh' value={image} onChange={((e) => setImage(e.target.value))} />
                <button className="btn-primary" type='submit'>
                    {editingId ? 'Cập Nhật Phim' : 'Thêm Phim'}
                </button>
            </form>

            <div className="movies-header">
                <h2>Danh sách phim hiện có</h2>
            </div>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <div className="movie-card" key={movie._id}>
                        <div className="movie-image-container">
                            <img className="movie-image" src={movie.image} alt={movie.title} />
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title}</h3>
                            <div className="movie-actions">
                                <Link to={`/movie/${movie._id}`} style={{ flex: 1, display: 'flex' }}>
                                    <button className="btn-secondary" style={{ width: '100%' }}>Chi tiết</button>
                                </Link>
                                <button className="btn-secondary" onClick={() => {
                                    seteditingId(movie._id);
                                    setTitle(movie.title);
                                    setImage(movie.image);
                                }}>Sửa</button>
                                <button className="btn-danger" onClick={() => handleDelete(movie._id)}>Xóa</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default HomePage
