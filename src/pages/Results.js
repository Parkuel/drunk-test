import { useLocation, useNavigate } from "react-router-dom";
import { db, Timestamp } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Results.css";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    const saveResult = async () => {
      try {
        await addDoc(collection(db, "testResults"), {
          uid: user.uid, // Save results under user's ID
          score,
          resultMessage: getResultMessage(score),
          createdAt: Timestamp.now(),
        });
        console.log("Result saved!");
      } catch (error) {
        console.error("Error saving result:", error);
      }
    };

    saveResult();
  }, [user, score, navigate]);

  const getResultMessage = (finalScore) => {
    if (finalScore <= 5) return "You're stone-cold sober. 😎";
    if (finalScore <= 10) return "You're feeling a little loose. ✍️";
    if (finalScore <= 15) return "You’re definitely feeling it. 🚰";
    if (finalScore <= 20) return "Drunk-text territory! 🚨";
    return "NOPE. Locking your phone. 🚫";
  };

  return (
    <div className="results-container">
      <h2>Your Score: {score}</h2>
      <p className="result-message">{getResultMessage(score)}</p>

      <button className="retake-button" onClick={() => navigate("/test")}>Retake Test</button>
      <button className="home-button" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default Results;
