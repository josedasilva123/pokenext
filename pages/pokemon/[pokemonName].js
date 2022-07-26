/* eslint-disable @next/next/no-img-element */


export default function Pokemon({pokemon}) {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>#{pokemon.id} - {pokemon.name}</h1>
    </div>
  );
}

export async function getServerSideProps({ params }){
    const { pokemonName } = params;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await res.json();

    return{
        props: {
            pokemon
        }
    }
}
