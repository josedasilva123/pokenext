import Link from "next/link";
import Head from "next/head";

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>
      
      <main>
        <h1>Home</h1>
        <ul>
        {pokemons.results.map(pokemon => (
          <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <li>
              <h2>{pokemon.name}</h2>
            </li>
          </Link>
          ))}
        </ul>        
      </main>     
    </>
      
  );
}


export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  const pokemons = await res.json()

  return {
    props: {
      pokemons,
    },
  }
}