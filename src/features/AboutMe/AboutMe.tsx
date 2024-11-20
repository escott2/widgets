import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <section className={styles.aboutMeContainer} id="about">
      <h2>About Me</h2>
      <h3 className={styles.infoHeading}>
        I'm an experienced front-end engineer with two bachelor degrees and many
        skills.
      </h3>

      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <h4>Experience</h4>
          With three years of professional front-end experience, I have a proven
          track record of delivering well-engineered features on time and
          maintaining large-scale codebases.
        </li>

        <li className={styles.infoItem}>
          <h4>Education</h4>I earned bachelor degrees in Psychology and Computer
          Information Systems.
        </li>

        <li className={styles.infoItem}>
          <h4>Skills</h4>I enjoy spending time in nature, reading, art and
          design, learning new things, and gardening.
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
