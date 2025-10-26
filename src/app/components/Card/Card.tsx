import styles from "./Card.module.css";

export default function Card({ product }: { product?: any }) {
  if (!product) return null;

  const id = product.id ?? product._id;
  const name = product.name ?? product.title ?? "Untitled";
  const image = product.image ?? product.imageUrl ?? "/images/logo.svg";
  const description = product.description ?? "No description";
  const price = product.price ?? product.amount ?? "-";

  return (
    <div className={styles.card} key={id}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
}
