import React, { useState } from 'react';
import './DynamicBotManager.css';

const DynamicBotManager = () => {
  const [bots, setBotValues] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });
  const [editingBot, setEditingBot] = useState(null);
  const [statusType, setStatusValue] = useState("all");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot({ ...newBot, [name]: value });
  };

  const filterByStatus = (statusValue) => {
    return bots.filter(bot => bot.status === statusValue);
  }

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingBot({ ...editingBot, [name]: value });
  };

  const addBotToList = () => {
    if (newBot.id.trim() !== '' && newBot.name.trim() !== '' && newBot.status.trim() !== '') {
      setBotValues([...bots, newBot]);
      setNewBot({ id: '', name: '', status: '' });
    }
  };

  const handleDelete = (id) => {
    setBotValues(bots.filter((bot) => bot.id !== id));
  };

  const handleEdit = (bot) => {
    setEditingBot(bot);
  };

  const saveEdit = () => {
    if (editingBot.id.trim() !== '' && editingBot.name.trim() !== '' && editingBot.status.trim() !== '') {
      setBotValues(
        bots.map((bot) => (bot.id === editingBot.id ? editingBot : bot))
      );
      setEditingBot(null);
    }
  };

  const handleFilter = (event) => {
    setStatusValue(event.target.value);
  }
  const filteredBots = statusType !== "all" ? filterByStatus(statusType) : bots;

  return (
    <div className="dynamic-bot-manager">
      <div>Filter by: {' '}
        <form>
          <select value={statusType} onChange={handleFilter}>
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </form>
      </div>
      <ul>
        {filteredBots.map((bot) => (
          <li key={bot.id}>
            <span>
              {bot.id} - {bot.name} - {bot.status}{' '}
              <button onClick={() => handleEdit(bot)}>Edit</button>
              <button className='delete' onClick={() => handleDelete(bot.id)}>Delete Bot</button>
            </span>
          </li>
        ))}
      </ul>
      {editingBot ? (
        <div>
          <h3>Edit Bot</h3>
          <input
            type="text"
            name="id"
            value={editingBot.id}
            onChange={handleEditInputChange}
            placeholder="Edit Bot ID"
            disabled
          />
          <input
            type="text"
            name="name"
            value={editingBot.name}
            onChange={handleEditInputChange}
            placeholder="Edit Bot Name"
          />
          <input
            type="text"
            name="status"
            value={editingBot.status}
            onChange={handleEditInputChange}
            placeholder="Edit Bot Status"
          />
          <button onClick={saveEdit}>Save Changes</button>
        </div>
      ) : (
        <div>
          <h3>Add New Bot</h3>
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
          <button className='add' onClick={addBotToList}>Add new Bot</button>
        </div>
      )}
    </div>
  );
};

export default DynamicBotManager;
