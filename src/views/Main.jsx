import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchCharacters } from '../services/fetch';

export default function Main() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await fetchCharacters();
      setData(resp);
      setLoad(false);
    };
    fetchApi();
  }, []);

  if (load) return <h1>Loading</h1>;

  return (
    <>
      <h1>List of Characters</h1>
      <br></br>
      {data.map((char) => (
        <CharacterList key={char.id} char={char} />
      ))}
    </>
  );
}
