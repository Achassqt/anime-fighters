import React, { useState } from 'react';
import axios from 'axios';

const AddAnimePage = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/animes', {
        title,
      });

      if (response.status === 201) {
        setMessage('Anime added successfully!');
        setTitle('');
      }
    } catch (error) {
      setMessage('Failed to add anime.');
      console.error('There was an error adding the anime:', error);
    }
  };

  return (
    <div>
      <h1>Add New Anime</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Anime</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddAnimePage;
