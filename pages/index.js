import Link from "next/link"

export default function Home({pokemons}) {
  return (
    <div>
       <h1>Pokedex</h1>
       {pokemons.results.map(pokemon => (
        <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
          <li>
            {pokemon.name}
          </li>
        </Link>        
       ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.')
  const pokemons = await res.json()

  return {
    props: {
      pokemons,
    },
  }
}