import styles from "./AboutMe.module.scss";
import { Element } from "react-scroll";
import stScholasticaLogo from "../../assets/st-scholastica-logo.svg";
import winonaStateLogo from "../../assets/winona-state-logo.svg";
import mPulseLogo from "../../assets/mPulse-logo.png";
import aboutImage from "../../assets/about-img.jpeg";
import { combineClasses } from "../../utils";
import { motion } from "framer-motion";
import { MainSectionHeading } from "../../components";
import testMask from "../../assets/test-mask.svg";

function AboutMe() {
  const titleOutlineVariants = {
    hidden: { rotate: 180, pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <section className={styles.sectionContainer}>
      <Element name="about">
        <MainSectionHeading sectionName="About" />

        <div className={styles.aboutInformation}>
          <section
            className={combineClasses(
              styles,
              "overviewContainer",
              "aboutSection"
            )}
          >
            <img
              src={aboutImage}
              alt="smiling woman reflection on a computer displaying code"
              className={styles.overviewImg}
            />
            <p className={styles.overviewText}>
              I’m a front-end engineer with three years of experience building
              and maintaining features for a large-scale web application at
              mPulse. I’m a people-centric software developer. I value and
              respect my teammates as we work together to create great user
              experiences. I embrace challenges with a growth mindset, eager to
              step outside my comfort zone to find innovative solutions to
              complex problems.
            </p>
          </section>
          <section className={styles.aboutSection}>
            <h3 className={styles.headingThree}>Skills</h3>
            <h4>Programming Languages</h4>
            <ul className={styles.skillsContainer}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
            <h4>Tools and Technologies</h4>
            <ul className={styles.skillsContainer}>
              <li>React</li>
              <li>Redux</li>
              <li>SCSS</li>
              <li>CSS Modules</li>
              <li>Styled Components</li>
              <li>Git</li>
              <li>Jira</li>
            </ul>
          </section>
          <section className={styles.aboutSection}>
            <h3>Experience</h3>
            <div className={styles.backgroundSection}>
              <img
                className={combineClasses(
                  styles,
                  "backgroundLogo",
                  "experienceBackgroundLogo"
                )}
                src={mPulseLogo}
                alt="mPulse Logo"
              />
              <div>
                <p className={styles.backgroundLocation}>
                  mPulse, Los Angeles, CA (Remote)
                </p>
                <p>Front-End Engineer</p>
                <p>June 2021 - June 2024</p>
              </div>
            </div>
          </section>
          <section className={styles.aboutSection}>
            <h3>Education</h3>
            <div className={styles.backgroundSection}>
              <img
                className={styles.backgroundLogo}
                src={stScholasticaLogo}
                alt="St. Scholastica logo"
              />
              <div>
                <p className={styles.backgroundLocation}>
                  The College of St. Scholastica, Duluth, MN
                </p>
                <p>Bachelor of Arts in Computer Information Systems</p>
                <p>August 2018 - May 2020</p>
              </div>
            </div>
            <div className={styles.backgroundSection}>
              <img
                className={styles.backgroundLogo}
                src={winonaStateLogo}
                alt="Winona State Logo"
              />
              <div>
                <p className={styles.backgroundLocation}>
                  Winona State University, Winona, MN
                </p>
                <p>Bachelor of Arts in Psychology</p>
                <p>August 2006 - December 2011</p>
              </div>
            </div>
          </section>
        </div>
      </Element>
    </section>
  );
}

export default AboutMe;
