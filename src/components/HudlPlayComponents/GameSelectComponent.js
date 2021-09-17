import React from 'react'


function GameSelect ({gameSelect, handleGameSelectChange}) {
  
  return (
    <div>
      <label>Game</label>
      <input type="text" value={gameSelect} onChange={handleGameSelectChange} />
    </div>
  )
}

  
export default GameSelect;