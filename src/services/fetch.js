export async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await response.json();
  console.log(characters);

  return characters.results;
}
// push note

export async function fetchById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const charById = await response.json();

  return charById;
}
