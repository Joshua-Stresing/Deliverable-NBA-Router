import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchById } from '../services/fetch';

export default function CharacterCard() {
  const { id } = useParams();
  const [char, setChar] = useState({});
  const history = useHistory('');

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await fetchById(id);
      setChar(data);
    };
    fetchCharacter();
  }, [id]);
  //home button
  const returnHome = async () => {
    history.push(`/`);
  };

  return (
    <article>
      <img alt="image of character" src={char.image} />
      <h1>{char.name}</h1>
      <p>Species:{char.species}</p>
      <p>Gender:{char.gender}</p>
      <p>Status:{char.status}</p>
      <button onClick={returnHome}>Go Home</button>
    </article>
  );
}
