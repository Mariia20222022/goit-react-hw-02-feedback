import React, { Component } from 'react';
import FeedbackButtons from './FeedbackOption/FeedbackButtons';
import css from './Feedback.module.css';
class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};
  //   state = {
  //     value: this.props.initialValue,
  //   };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = total > 0 ? ((good / total) * 100).toFixed(2) : 0;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div className={css.buttons__container}>
          <FeedbackButtons feedbackType="good" onClick={this.handleFeedback} />
          <FeedbackButtons
            feedbackType="neutral"
            onClick={this.handleFeedback}
          />
          <FeedbackButtons feedbackType="bad" onClick={this.handleFeedback} />
        </div>
        <h2>Statistics</h2>
        <div className={css.title__container}>
          <span className={css.statistic__title}>Good:{good}</span>
          <span className={css.statistic__title}>Neutral:{neutral}</span>
          <span className={css.statistic__title}>Bad:{bad}</span>
          <span className={css.statistic__title}>Total:{total}</span>
          <span className={css.statistic__title}>
            Positive feedback:{positiveFeedback}%
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;
