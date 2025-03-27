import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInAnonymouslyUser } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymouslyUser();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login / Sign Up</h2>

      {error && <p className="error-message">{error}</p>}

      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleEmailLogin}>Login with Email</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      <button onClick={handleAnonymousLogin}>Try as Guest</button>
    </div>
  );
}

export default Login;
