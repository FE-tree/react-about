// import { useState } from "react";
import { useImmer } from 'use-immer';

export default function Scoreboard() {
  /* const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  }); */
  const [player, setPlayer] = useImmer({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 3,
    array: ['11','22','33']
  });

  function handlePlusClick() {
    /* setPlayer({
      ...player,
      score: player.score+1,
    }); */
    let s = player.score+1
    setPlayer(data => {
      data.score = s;
      data.array = [
        ...data.array,
        s.toString()+s.toString()
      ]
    })
  }

  function handleFirstNameChange(e) {
    /* setPlayer({
      ...player,
      firstName: e.target.value,
    }); */
    setPlayer(data => {
      data.firstName = e.target.value
    })
  }

  function handleLastNameChange(e) {
    /* setPlayer({
      ...player,
      lastName: e.target.value,
    }); */
    setPlayer(data => {
      data.lastName = e.target.value
    })
  }

  return (
    <>
      <br/>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <br/>
      <br/>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <br/>
      <br/>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
      <br/>
      <br/>
      {player.array.join(', ')}
    </>
  );
}
