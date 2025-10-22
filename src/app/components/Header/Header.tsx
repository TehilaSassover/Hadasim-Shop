import Link from "next/link";
import styles from "./Header.module.css";

type Variant = "home" | "form";

export default function Header({
    variant = "home",
    logoSrc = "/images/Logo.webp",
}: {
    variant?: Variant;
    logoSrc?: string;
}) {
    return (
        <header className={styles.header} data-variant={variant}>
            <div className={styles.brand}>
                <img src={logoSrc} alt="logo" className={styles.logo} />
                <h1>My App</h1>
            </div>

            <nav className={styles.nav}>
                <Link href="/" className={variant === "home" ? styles.active : ""}>
                    Home
                </Link>
                <Link href="/form" className={variant === "form" ? styles.active : ""}>
                    Form
                </Link>
            </nav>
        </header>
    );
}