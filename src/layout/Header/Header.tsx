import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.pageTitle}>Emily Scott</p>
      <ul className={styles.navList}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
