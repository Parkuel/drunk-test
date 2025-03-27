import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Test.css";
import { useAuth } from "../context/AuthContext";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0); // Progress state
  const [clickedButton, setClickedButton] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Fetch questions from local API
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setSelectedQuestions(shuffled.slice(0, 5)); // Pick 5 random questions
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [user, navigate]);

  useEffect(() => {
    if (selectedQuestions.length > 0) {
      setProgress(((currentQuestion + 1) / selectedQuestions.length) * 100);
    }
  }, [currentQuestion, selectedQuestions]);

  const handleAnswer = (points, index) => {
    setClickedButton(index); // Highlight the clicked button

    setTimeout(() => {
      setClickedButton(null); // Remove highlight after animation
      setScore(score + points);

      if (currentQuestion < selectedQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/results", { state: { score } });
      }
    }, 300); // Small delay for effect
  };

  if (selectedQuestions.length === 0) return <p>Loading questions...</p>;

  return user ? (
    <div className="test-container">
      <h2>Question {currentQuestion + 1} of {selectedQuestions.length}</h2>
      
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="question-text">{selectedQuestions[currentQuestion].text}</p>

      <div className="answer-buttons">
        {selectedQuestions[currentQuestion].options.map((option, index) => (
        <button 
          key={index} 
          className={`answer-button ${clickedButton === index ? "clicked" : ""}`} 
          onClick={() => handleAnswer(option.points, index)}
        >
          {option.text}
        </button>
        ))}
      </div>
    </div>
  ) : null;
}

export default Test;
