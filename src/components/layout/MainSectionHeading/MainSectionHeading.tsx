import styles from "./MainSectionHeading.module.scss";
import backgroundImg from "../../../assets/title-background-blue.jpg";
// import backgroundImg from "../../../assets/pixels.jpg";

interface MainSectionHeadingProps {
  sectionName: string;
}

function MainSectionHeading({ sectionName }: MainSectionHeadingProps) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.backgroundImgContainer}>
        <img src={backgroundImg} className={styles.backgroundImg} />
      </div>
      <h2 className={styles.sectionTitle}>{sectionName}</h2>
    </div>
  );
}

export default MainSectionHeading;
