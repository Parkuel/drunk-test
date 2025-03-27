import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Are You Too Drunk to Text? 🍻</h1>
      <p>Take this quick test to find out before you embarrass yourself.</p>
      
      <Link to="/test">
        <button className="start-button">Start the Test</button>
      </Link>
    </div>
  );
}

export default Home;
