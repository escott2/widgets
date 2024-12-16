import styles from "./MainSectionContainer.module.scss";
import { Element } from "react-scroll";

interface MainSectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
}

function MainSectionContainer({
  children,
  sectionName,
}: MainSectionContainerProps) {
  return (
    <Element name={sectionName}>
      <section className={styles.sectionContainer}>
        <div className={styles.sectionContent}>{children}</div>
      </section>
    </Element>
  );
}

export default MainSectionContainer;
