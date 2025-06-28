import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import PostDetails from './services/Postdetails.jsx';

function App() {
  // You can use authService.login or authService.register here if needed

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

