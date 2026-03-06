import styles from "./page.module.scss";
import Link from "next/link";
// TODO: Import your pokemon data here!
import { team } from "../../data/pokemonData";

export default function BasicsPage() {
  return (
    <main className={styles.container}>
      <h1>Basics</h1>
      <h2>Grab the Pokémon data and show it here!</h2>

      <div className={styles.data}>
        {/* TODO: Use .map() on your imported data */}

        {
          team.map((pokemon) => (
            <div key={ pokemon.id } className={styles.card}>
              <img src={ pokemon.image } alt={ pokemon.name } className={styles.pokemonImage} />
              <h3>{ pokemon.name }</h3>
              <p>Type: { pokemon.type }</p>
            </div>
			    ))
        }
      </div>

      <div className={styles.buttonGroup}>
        <Link href="/pokemonTeam">
          <button className={styles.backButton}>Go to Next Lesson</button>
        </Link>
      </div>
    </main>
  );
}
