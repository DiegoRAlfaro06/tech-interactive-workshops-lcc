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

        {/* Example skeleton:
          {yourData.map((item) => (
            <div key={ *unique key* } className={styles.card}>
              <img src={ *item.image* } alt={ *item.name* } className={styles.pokemonImage} />
              <h3>{ *item.name* }</h3>
              <p>Type: { *item.type* }</p>
            </div>
			))}
        */}
        {team.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <h3>{ item.name }</h3>
              <p>Type: { item.type } </p>
            </div>
          ))}
      </div>

      <div className={styles.buttonGroup}>
        <Link href="/pokemonTeam">
          <button className={styles.backButton}>Go to Next Lesson</button>
        </Link>
      </div>
    </main>
  );
}
