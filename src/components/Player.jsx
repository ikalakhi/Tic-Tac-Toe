import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEding] = useState(false);

    const handelChange = (e) => {
        console.log(e);
        setPlayerName(e.target.value);
    }

    let editablPlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edite";
    if(isEditing) {
        editablPlayerName = <input type="text" required defaultValue={playerName} onChange={handelChange}/>;
        btnCaption = "Save";
    }
    return(
        <li>
            <span className="player">
              {editablPlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEding(editing => !editing)}>{btnCaption}</button>
        </li>
    );
}