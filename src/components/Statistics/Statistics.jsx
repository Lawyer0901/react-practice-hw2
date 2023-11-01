const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>Statistic</h2>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total:</p>
        </li>
        <li>Positive feedback:</li>
      </ul>
    </>
  );
};

export default Statistics;
