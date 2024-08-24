import React, { useState } from "react";

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      text,
      rating,
      id: Date.now(), // Generate a new ID for new feedback
    };
    addFeedback(feedback);
    setText("");
    setRating(10);
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
      </form>
    </div>
  );
}

export default FeedbackForm;
