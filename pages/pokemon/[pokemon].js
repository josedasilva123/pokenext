/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Pokemon({ currentPokemon }) {
  return (
    <>
      <Head>
        <title>Pokédex - #{currentPokemon.id} - {currentPokemon.name}</title>
      </Head>
      <main>
        <img
          src={currentPokemon.sprites.front_default}
          alt={currentPokemon.name}
        />
        <h1>
          #{currentPokemon.id} - {currentPokemon.name}
        </h1>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  const currentPokemon = await res.json();

  return {
    props: {
      currentPokemon,
    },
  };
}
