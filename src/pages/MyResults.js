import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/MyResults.css";

function MyResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchResults = async () => {
      try {
        console.log("Fetching results for UID:", user.uid); // Debugging Log

        const q = query(
          collection(db, "testResults"),
          where("uid", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);
        const userResults = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Fetched results:", userResults); // Debugging Log
        setResults(userResults);
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [user, navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="results-container">
      <h2>My Past Results</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p><strong>Score:</strong> {result.score}</p>
              <p><strong>Message:</strong> {result.resultMessage}</p>
              <p><strong>Date:</strong> {new Date(result.createdAt.seconds * 1000).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
      <button className="home-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default MyResults;
