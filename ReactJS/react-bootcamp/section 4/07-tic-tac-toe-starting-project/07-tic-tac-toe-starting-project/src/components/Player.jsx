import { useState } from "react";

export default function Player({ name, symbol, isActive, ...valores }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function onEditNameHandler() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    console.log(valores.required);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-simbol">{symbol}</span>
      </span>
      <button onClick={onEditNameHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
