import React from 'react'
import { useState } from 'react'

const DynamicBotManager = () => {
  //  useState hook for list of bots
  const [bots, setBots] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  // useState hook for new bot object
  const [newBot, setNewBot] = useState({id: '', name: '', status: ''});

  return (
    <div>
      <ul>
        {
          bots.map(bot=> <li><span>{bot.id} - {bot.name} - {bot.status}</span></li>)
        }
      </ul>      
        
    </div>
  )
}

export default DynamicBotManager
