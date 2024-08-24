import React from "react";

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <div className="card">
      <button className="close" onClick={() => handleDelete(feedback.id)}>
        <i className="fas fa-trash"></i> {/* Font Awesome delete icon */}
      </button>
      <h2>{feedback.text}</h2>
      <div className="rating-display">
        {[...Array(feedback.rating)].map((_, index) => (
          <span key={index} className="rating-icon">
            <i className="fas fa-star"></i> {/* Font Awesome star icon */}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FeedbackItem;
