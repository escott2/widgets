import styles from "./Home.module.scss";
import { About, Projects, Contact } from "../../features";
import laptopImg from "../../assets/laptop.jpg";
import handWaveOutline from "../../assets/hand-wave-outline.svg";
import { useEffect } from "react";
import { Link, animateScroll as scroll, Element } from "react-scroll";
import { IconButton } from "../../components/ui/Button";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

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
          scale: { type: "spring", duration: 0.5 },
          opacity: { ease: "linear", duration: 0.25 },
        }
      );
    }
  }, [hasScrolledDown]);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const handWaveVariants = {
    animate: { rotate: [-45, 0, -45, 0] },
  };

  return (
    <>
      <main className={styles.homeContainer}>
        <Element name="landing">
          <div className={styles.titleContainer}>
            <div className={styles.titleContainerContent}>
              <h2 className={styles.sectionTitle}>
                Hello, I'm Emily Scott, a front-end engineer.
              </h2>
              <motion.img
                src={handWaveOutline}
                alt="hand wave outline"
                className={styles.handWaveOutline}
                variants={handWaveVariants}
                animate="animate"
              />
            </div>
          </div>

          <div className={styles.introSectionContainer}>
            <div className={styles.introContent}>
              <div className={styles.introText}>
                <p>
                  I build well-engineered, responsive, and user-friendly
                  websites. Explore{" "}
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={0}
                    className={styles.link}
                  >
                    my featured projects
                  </Link>
                  , learn more{" "}
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-120}
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
                    offset={-120}
                    duration={0}
                    className={styles.link}
                  >
                    reach out
                  </Link>{" "}
                  if you're interested in working together!
                </p>
              </div>
              <img
                src={laptopImg}
                className={styles.desk}
                alt="macbook on concrete surface"
              />
            </div>
          </div>
        </Element>
        <Projects />
        <About />
        <Contact />

        <AnimatePresence>
          {hasScrolledDown && (
            <motion.div
              ref={scope}
              className={styles.buttonContainer}
              exit={{ scale: 1, opacity: 0 }}
              transition={{
                scale: { type: "spring", duration: 0.5 },
                opacity: { ease: "linear", duration: 0.25 },
              }}
            >
              <IconButton
                onClick={handleScrollToTop}
                customClasses={styles.scrollToTopButton}
              >
                <svg viewBox="0 0 20 20" fill="#223945">
                  <path d="M9.00014 3.828L2.92914 9.899L1.51514 8.485L10.0001 0L10.7071 0.707L18.4851 8.485L17.0711 9.899L11.0001 3.828V20H9.00014V3.828Z" />
                </svg>
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default Home;
