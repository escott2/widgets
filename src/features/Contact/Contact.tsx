import { Element } from "react-scroll";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section className={styles.sectionContainer}>
      <Element name="contact">
        <h2 className={styles.sectionTitle}>Contact</h2>
      </Element>
    </section>
  );
}

export default Contact;
