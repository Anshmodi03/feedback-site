import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import FeedbackStats from "./FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is a great app!", rating: 9 },
    { id: 2, text: "Needs improvement.", rating: 6 },
  ]);

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Feedback App</h1>
      </header>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
