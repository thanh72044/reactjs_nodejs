import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
function App() {
  return (
    <Routes>
      {/* Khi người dùng vào đường dẫn "/" (mặc định), thì hiển thị HomePage */}
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>

  );
}

export default App;
