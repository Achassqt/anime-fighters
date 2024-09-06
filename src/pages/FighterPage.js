import React, { useEffect, useState } from 'react';
import { getFighters } from '../services/api';

const FighterPage = () => {
    const [fighters, setFighters] = useState([]);
    
    useEffect(() => {
        const fetchCharacters = async () => {
          const data = await getFighters();
          setFighters(data);
        };
    
        fetchCharacters();
      }, []);

    return (
      <div>
        <h1>Fighter Page</h1>
        <ul>
        {fighters.length > 0 ?
            fighters.map(fighter => (
            <li key={fighter._id}>{fighter.name}</li>
            )) : <span>Pas de combatant</span>
        }
      </ul>
      </div>
    );
  };
  
  export default FighterPage;
  