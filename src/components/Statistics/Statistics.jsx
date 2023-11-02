const Statistics = ({ good, neutral, bad, total }) => {
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
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback:</p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
