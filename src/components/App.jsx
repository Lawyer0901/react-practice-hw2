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

  handleClick = () => {
    this.setState(prevState => {
      console.log(prevState);
      // const key = this.state
      // const key2 = key.good
      // console.log(key2);
      
      
    })
  }
 
  //   this.setState(prevState => {
  //     const key = this.state
  //     console.log(key);
  //     console.log(prevState);
  //     // return { prevState[key]: prevState[key] ++}
  //   });
  // }
// }

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
        />
      </div>
    );
  }
}

export default App;
