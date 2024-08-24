import React from "react";

function FeedbackStats({ feedback }) {
  const total = feedback.length; // Number of feedback items
  const average = (
    feedback.reduce((acc, item) => acc + item.rating, 0) / total
  ).toFixed(1); // Calculate average rating

  return (
    <div className="feedback-stats">
      <div className="feedback-stats1">Total Feedbacks</div>
      <div className="num-display1">{total}</div>
      <div className="feedback-stats2">Average Rating</div>
      <div className="num-display2">{average}</div>
    </div>
  );
}

export default FeedbackStats;
