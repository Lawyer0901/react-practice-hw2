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

  render() {
    const option = Object.keys(this.state);
    console.log(option);
    return (
      <div>
        <MainTitle text="Please leave Feedback" />
        <FeedbackOptions options={option} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
