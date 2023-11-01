const FeedbackOptions = ({ options }) => {
  return options.map(option => {
    return <button>{option}</button>;
  });
};

export default FeedbackOptions;
