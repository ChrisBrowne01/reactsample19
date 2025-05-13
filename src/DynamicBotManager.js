import React, { useState } from 'react';

const DynamicBotManager = () => {
  const [bots, setBotValues] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot({ ...newBot, [name]: value });
  };

  const addBotToList = () => {
    if (newBot.id.trim() && newBot.name.trim() && newBot.status.trim()) {
      setBotValues([...bots, newBot]);
      setNewBot({ id: '', name: '', status: '' });
    }
  };

  const handleDelete = (id) => {
    setBotValues(bots.filter((bot) => bot.id !== id));
  };

  return (
    <div className="dynamic-bot-manager">
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <span>
              {bot.id} - {bot.name} - {bot.status}{' '}
              <button onClick={() => handleDelete(bot.id)}>Delete Bot</button>
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="id"
        value={newBot.id}
        onChange={handleInputChange}
        placeholder="Type Bot ID"
      />
      <input
        type="text"
        name="name"
        value={newBot.name}
        onChange={handleInputChange}
        placeholder="Type Bot Name"
      />
      <input
        type="text"
        name="status"
        value={newBot.status}
        onChange={handleInputChange}
        placeholder="Type Bot Status"
      />
      <button onClick={addBotToList}>Add new Bot</button>
    </div>
  );
};

export default DynamicBotManager;
