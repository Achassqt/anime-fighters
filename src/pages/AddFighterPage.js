import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddFighterPage = () => {
  const [name, setName] = useState('');
  const [animeId, setAnimeId] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    // Récupérer la liste des animes
    const fetchAnimes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/animes');
        setAnimes(response.data);
      } catch (error) {
        console.error('Error fetching animes:', error);
      }
    };

    fetchAnimes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/fighters', {
        name,
        anime: animeId,
        description,
      });

      if (response.status === 201) {
        setMessage('Fighter added successfully!');
        setName('');
        setAnimeId('');
        setDescription('');
      }
    } catch (error) {
      setMessage('Failed to add fighter.');
      console.error('There was an error adding the fighter:', error);
    }
  };

  return (
    <div>
      <h1>Add New Fighter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Anime:</label>
          <select value={animeId} onChange={(e) => setAnimeId(e.target.value)} required>
            <option value="">Select an Anime</option>
            {animes.map(anime => (
              <option key={anime._id} value={anime._id}>
                {anime.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Fighter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddFighterPage;
