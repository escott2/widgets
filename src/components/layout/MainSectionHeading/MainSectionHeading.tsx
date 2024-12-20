import styles from "./MainSectionHeading.module.scss";
import sectionTitleShape from "../../../assets/section-title-shape.svg";

interface MainSectionHeadingProps {
  sectionName: string;
}

function MainSectionHeading({ sectionName }: MainSectionHeadingProps) {
  return (
    <div>
      <div className={styles.sectionDividerContainer}>
        <div className={styles.sectionDividerShape}></div>
      </div>
      <img src={sectionTitleShape} className={styles.sectionTitleShape} />
      <h2 className={styles.sectionTitle}>{sectionName}</h2>
    </div>
  );
}

export default MainSectionHeading;
