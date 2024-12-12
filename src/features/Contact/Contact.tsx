import { Element } from "react-scroll";
import styles from "./Contact.module.scss";
import { MainSectionHeading } from "../../components";

function Contact() {
  return (
    <section className={styles.sectionContainer}>
      <Element name="contact">
        <MainSectionHeading sectionName="Contact" />
      </Element>
    </section>
  );
}

export default Contact;
