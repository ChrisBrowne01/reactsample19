import React from 'react'
import { useState } from 'react'

const DynamicBotManager = () => {
  //  useState hook for list of bots
  const [bots, setBotValues] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  // useState hook for new bot object
  const [newBot, setNewBot] = useState({id: '', name: '', status: ''});

  // Implement input change handler


  // Implement add bot functionality
  const addBotToList = () => {
    if (newBot.id.trim() !== '' && newBot.name.trim() !== '' && newBot.status.trim() !== '') {
      setBotValues([...bots, newBot]);
      setNewBot({id: '', name: '', status: ''});
    }
  }

  // Implement delete bot functionality

  return (
    <div>
      <ul>
        {
          bots.map(bot=> <li><span>{bot.id} - {bot.name} - {bot.status}</span></li>)
        }
      </ul>      
      <input type="text" value={newBot.id} onChange={(e)=> setNewBot({...newBot, id: e.target.value})} placeholder="Type Bot ID" />        
      <input type="text" value={newBot.name} onChange={(e)=> setNewBot({...newBot, name: e.target.value})} placeholder="Type Bot Name" />        
      <input type="text" value={newBot.status} onChange={(e)=> setNewBot({...newBot, status: e.target.value})} placeholder="Type Bot Status" />
      <button onClick={addBotToList}>Add new Bot</button>        
    </div>
  )
}

export default DynamicBotManager
