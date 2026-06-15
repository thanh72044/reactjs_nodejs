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
                setIslogin(true)
            } else {
                alert(data)
            }
        } catch (error) {
            console.log('lỗi kết nối tới server')
        }
    }

    return (
        <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
            <form onSubmit={isLogin ? handleLogin : handleRegister}>
                <h3>{isLogin ? 'Đăng nhập' : 'Đăng ký tài khoản'}</h3>

                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                />

                <button type="submit" style={{ width: '100%', padding: '5px', marginBottom: '10px' }}>
                    {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                </button>
            </form>
            {/* Nút chuyển đổi qua lại giữa Đăng nhập và Đăng ký */}
            <p>
                {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                    {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                </button>
            </p>
        </div>
    )


}

export default LoginPage