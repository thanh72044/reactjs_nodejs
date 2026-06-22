import React from 'react';
import { data, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        const dataToSend = {
            username: username,
            password: password
        }
        try {
            const Response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)

            })
            const data = await Response.json()
            if (Response.ok) {
                console.log('đăng nhập thành công', data)
                alert('đăng nhập thành công')
                localStorage.setItem('token', data.token)
                navigate('/')
            } else {
                alert(data)
            }
        } catch (error) {
            console.log('Lỗi kết nối server', error);
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const dataToSend = {
            username: username,
            password: password

        }
        try {
            const Response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            })
            const data = await Response.json()
            if (Response.ok) {
                console.log('đăng ký thành công', data)
                alert('đăng ký thành công')
                setIsLogin(true)
            } else {
                alert(data)
            }
        } catch (error) {
            console.log('lỗi kết nối tới server')
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <div className="app-container">
            <div className="form-container">
                <h2 className="form-title">{isLogin ? 'Đăng Nhập' : 'Đăng Ký Tài Khoản'}</h2>
                <form onSubmit={isLogin ? handleLogin : handleRegister}>
                    <div className="input-group">
                        <input className="input-field" type="text" placeholder='Tên đăng nhập' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input className="input-field" type="password" placeholder='Mật khẩu' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn-primary" type="submit">
                        {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
                    </button>
                </form>
                {/* Nút chuyển đổi qua lại giữa Đăng nhập và Đăng ký */}
                <p className="switch-text">
                    {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                    <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                    </button>
                </p>
            </div>
        </div>
    )


}

export default LoginPage