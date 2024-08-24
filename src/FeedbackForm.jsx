import React, { useState } from "react";
import "./App.css"; // Ensure to import the CSS file if it's not already imported

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [error, setError] = useState(""); // State to handle error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the text length is less than 10 characters
    if (text.length < 7) {
      setError("Feedback must be at least 7 characters long.");
      return;
    }

    // Proceed with adding feedback if validation passes
    const feedback = {
      text,
      rating,
      id: Date.now(), // Generate a new ID for new feedback
    };
    addFeedback(feedback);
    setText("");
    setRating(10);
    setError(""); // Clear error message on successful submission
  };

  return (
    <div className="card">
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleSubmit}>
        <ul className="rating">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rate) => (
            <li key={rate}>
              <input
                type="radio"
                id={`rating-${rate}`}
                name="rating"
                value={rate}
                checked={rating === rate}
                onChange={() => setRating(rate)}
              />
              <label htmlFor={`rating-${rate}`}>{rate}</label>
            </li>
          ))}
        </ul>
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter feedback"
            required
          />
          <button className="btn btn-primary" type="submit">
            Submit Feedback
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
      </form>
    </div>
  );
}

export default FeedbackForm;
