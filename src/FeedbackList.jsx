import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          feedback={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
