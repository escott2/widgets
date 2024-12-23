import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.scss";

function Loader() {
  const loaderOverride: React.CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className={styles.loaderContainer} aria-label="Loading...">
      <PuffLoader
        color="#000000"
        loading={true}
        cssOverride={loaderOverride}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
