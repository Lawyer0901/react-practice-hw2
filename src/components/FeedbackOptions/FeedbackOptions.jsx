const FeedbackOptions = ({ options }) => {
  return options.map(({ name }, index) => {
    return <button key={index}>{name}</button>;
  });
};

export default FeedbackOptions;
