import { Component } from 'react';
import MainTitle from './MainTitle/MainTitle';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    // console.log(event.target);
    const { name } = event.target;
    this.setState(prevState => {
      // console.log(prevState);
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total;
  };

  render() {
    const option = Object.keys(this.state);

    return (
      <div>
        <MainTitle text="Please leave Feedback" />
        <FeedbackOptions options={option} onLeaveFeedback={this.handleClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
        />
      </div>
    );
  }
}

export default App;
