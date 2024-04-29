import { MouseEventHandler, useState } from "react";

const Header = ({ text } : {text:string}) => <h1>{text}</h1>;

const Button = ({ onClick, text }:{onClick:MouseEventHandler, text:string}) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }:{text:string, value:number|string}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }:{good:number, neutral:number, bad:number}) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  const average = () => (good - bad) / total;

  const positive = () => (good / total) * 100 + " %";

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average()} />
        <Statistic text="positive" value={positive()} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header text={"give feedback"} />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App
