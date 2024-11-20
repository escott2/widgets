import styles from "./Home.module.scss";
import { AboutMe } from "../../features";
import deskImg from "../../assets/landing-desk.jpeg";
import { Projects } from "../Projects";
import { useEffect } from "react";

import { Link, animateScroll as scroll, Element } from "react-scroll";
import { IconButton } from "../../components/ui/Button";
import { useAnimate } from "framer-motion";

interface HomeProps {
  hasScrolledDown: boolean;
}

function Home({ hasScrolledDown }: HomeProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (hasScrolledDown) {
      animate(
        scope.current,
        { scale: 1.2, opacity: 1 },
        {
          scale: { type: "spring", duration: 1 },
          opacity: { ease: "linear", duration: 0.25 },
        }
      );
    }
  }, [hasScrolledDown]);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Element name="landing"></Element>
      <main className={styles.homeContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            Hello, I'm Emily Scott a front-end engineer and design enthusiast.
          </h2>
        </div>

        <div className={styles.introSectionContainer}>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              I'm passionate about creating exceptional web experiences that are
              not only visually appealing but also intuitive and
              well-engineered. I'm an experienced engineer excited for the next
              adventure. Explore{" "}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={30}
                duration={0}
                className={styles.link}
              >
                my work
              </Link>
              , learn more{" "}
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
                className={styles.link}
              >
                about me
              </Link>
              , and{" "}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
                className={styles.link}
              >
                reach out
              </Link>{" "}
              if you're interested in working together!
            </p>
            <img src={deskImg} className={styles.desk} alt="macbook on desk" />
          </div>
        </div>

        <Projects />
        <AboutMe />
        <section className={styles.contactSection}>
          <Element name="contact">
            <h2>Contact</h2>
          </Element>
        </section>
        {hasScrolledDown && (
          <div ref={scope} className={styles.buttonContainer}>
            <IconButton
              onClick={handleScrollToTop}
              customClasses={styles.scrollToTopButton}
            >
              <svg viewBox="0 0 20 20" fill="#223945">
                <path d="M9.00014 3.828L2.92914 9.899L1.51514 8.485L10.0001 0L10.7071 0.707L18.4851 8.485L17.0711 9.899L11.0001 3.828V20H9.00014V3.828Z" />
              </svg>
            </IconButton>
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
