import styles from "./Header.module.scss";
import headerLogo from "../../../assets/widgetsLogo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <img
          src={headerLogo}
          className={styles.pageLogo}
          alt="four blue squares with the letter W in the center"
        />
        <h1 className={styles.pageTitle}>Widgets</h1>
      </div>
    </header>
  );
}

export default Header;
