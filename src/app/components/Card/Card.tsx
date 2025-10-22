import styles from "./Card.module.css";

export default function Card({ apartments }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Available Apartments</h1>
      <div className={styles.grid}>
        {apartments.map((apt) => (
          <div key={apt.id} className={styles.card}>
            <img
              src={apt.image}
              alt={apt.name}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2 className={styles.name}>{apt.name}</h2>
              <p className={styles.description}>{apt.description}</p>
              <p className={styles.price}>${apt.price} / night</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
