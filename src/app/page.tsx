import Image from "next/image";
import Link from "next/link";
import styles from "./launch.module.css";

const previews = [
  { image: "mood", title: "AI Discovery", alt: "SRVN search with cuisine, vibe, occasion, and price options" },
  { image: "nearby", title: "Explore nearby", alt: "Nearby restaurants in Toronto with save controls" },
  { image: "dishes", title: "Discover the dishes", alt: "Restaurant details with top dishes, photos, and reviews" },
  { image: "feed", title: "Share your finds", alt: "SRVN food feed showing a lasagna review" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="SRVN home">SRVN</Link>
        <Link href="/support">Contact</Link>
      </header>
      <main>
        <section className={styles.hero} aria-labelledby="launch-title">
          <h1 id="launch-title">Find your next <em>great meal.</em></h1>
          <p className={`nav-badge ${styles.status}`}><span className="nav-dot" aria-hidden="true" />Coming soon</p>
          <p className={styles.description}>Explore nearby restaurants, discover dishes, and share what’s worth trying.</p>
        </section>
        <section className={styles.gallery} aria-label="Explore SRVN">
          {previews.map((preview, index) => (
            <figure key={preview.image} className={styles.preview}>
              <figcaption>{preview.title}</figcaption>
              <Image src={`/app-preview/${preview.image}.png`} alt={preview.alt} width={1284} height={2778} sizes="(max-width: 600px) 86vw, (max-width: 1000px) 44vw, 23vw" loading={index === 0 ? "eager" : "lazy"} />
            </figure>
          ))}
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Good food starts with you.</p>
        <nav aria-label="Footer"><Link href="/terms">Terms of Use</Link><Link href="/privacy">Privacy Policy</Link><Link href="/support">Contact</Link><a href="https://www.instagram.com/srvnapp/" target="_blank" rel="noopener noreferrer">Instagram</a></nav>
      </footer>
    </div>
  );
}
