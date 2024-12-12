import { motion } from "framer-motion";
import styles from "./MainSectionHeading.module.scss";

interface MainSectionHeadingProps {
  sectionName: string;
}

function MainSectionHeading({ sectionName }: MainSectionHeadingProps) {
  // const titleOutlineVariants = {
  //   hidden: { rotate: 180, pathLength: 0 },
  //   visible: {
  //     pathLength: 1,
  //     transition: { duration: 2 },
  //   },
  // };

  return (
    <div className={styles.sectionTitleContainer}>
      <h2 className={styles.sectionTitle}>{sectionName}</h2>
    </div>
  );
}

export default MainSectionHeading;
