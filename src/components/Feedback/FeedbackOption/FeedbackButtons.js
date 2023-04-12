import React from 'react';
import css from './FeedbackButtons.module.css';
const FeedbackButtons = ({ feedbackType, onClick }) => {
  return (
    <button className={css.button} onClick={() => onClick(feedbackType)}>
      {feedbackType}
    </button>
  );
};

export default FeedbackButtons;
