import React from "react";

function FeedbackStats({ feedback }) {
  const total = feedback.length; // Number of feedback items
  const average = (
    feedback.reduce((acc, item) => acc + item.rating, 0) / total
  ).toFixed(1); // Calculate average rating

  return (
    <div className="feedback-stats">
      <div>Total Feedbacks</div>
      <div className="num-display">{total}</div>
      <div>Average Rating</div>
      <div className="num-display">{average}</div>
    </div>
  );
}

export default FeedbackStats;
