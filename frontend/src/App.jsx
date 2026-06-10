import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import LoginPage from './pages/loginPage';
function App() {
  return (
    <Routes>
      {/* Khi người dùng vào đường dẫn "/" (mặc định), thì hiển thị HomePage */}
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>

  );
}

export default App;
