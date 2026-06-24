import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import LoginPage from './pages/login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext)
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}


function App() {
  return (
    <Routes>
      {/* Khi người dùng vào đường dẫn "/" (mặc định), thì hiển thị HomePage */}
      <Route path="/" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>

  );
}

export default App;
