import { useAuth } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Results from "./pages/Results";
import Login from "./pages/Login";
import MyResults from "./pages/MyResults";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  const { user, logout } = useAuth();

  return (
    <Router>
      <nav className="nav-container">
        <div className="nav-links">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/test">Take Test</Link>
              <Link to="/my-results">My Results</Link>
              <button className="logout-button" onClick={logout}>Logout</button>
              <span className="user-info">{user.email ? user.email : "Guest"}</span>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-results" element={<MyResults />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;