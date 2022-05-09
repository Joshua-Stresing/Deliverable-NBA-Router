import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ char }) {
  return (
    <div key={char.id}>
      <Link to={`/${char.id}`}>
        <h1>
          {char.name} ({char.status})
        </h1>
      </Link>
    </div>
  );
}
