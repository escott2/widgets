import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div>
          <h1 className={styles.pageTitle}>Widgets</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
