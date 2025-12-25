import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [four, setFour] = useState(0);
  const [single, setSingle] = useState(0);

  const handleSingles = () => {
    const updatedRuns = runs + 1;
    const updatedSingles = single + 1;
    setSingle(updatedSingles);
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFour = four + 1;
    setFour(updatedFour);
    setRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatesRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updatesRuns);
  };

  return (
    <div className="card">
      <h2>Player: Bangla Batsman</h2>
      <p>
        <small>
          Six: {sixes} Four: {four} Singles: {single}
        </small>
      </p>

      {runs > 50 && <p>Your score is : 50</p>}
      <h2>Score: {runs}</h2>
      <div className="button-space">
        <button onClick={handleSingles}>Singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    </div>
  );
}
