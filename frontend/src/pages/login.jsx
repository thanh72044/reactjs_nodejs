import React from 'react';
import { data, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        const dataToSend = {
            username: username,
            password: password
        }
        try {
            const Response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(dataToSend)
            })
            const data = await Response.json()
            if (Response.ok) {
                console.log('đăng nhập thành công', data)
                alert('đăng nhập thành công')
                localStorage.setItem('token', data.token)
            } else {
                alert(data)
            }
        } catch (error) {
            console.log('Lỗi kết nối server', error);
        }
    }

    return (
        <form onSubmit={handleLogin} >
            <h3>đăng nhập</h3>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">đăng nhập</button>
        </form>
    )


}

export default LoginPage