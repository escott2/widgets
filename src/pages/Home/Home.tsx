import { useRef, useState } from "react";
import styles from "./Home.module.scss";
import { About, Projects, Contact } from "../../features";
import laptopImg from "../../assets/laptop.jpg";
import handWaveOutline from "../../assets/hand-wave-outline.svg";
import { useEffect } from "react";
import { Link, animateScroll as scroll, Element } from "react-scroll";
import { IconButton } from "../../components/ui/Button";
import { useAnimate, motion, AnimatePresence } from "framer-motion";
import { default as CursorEffect } from "../../features/CursorEffect/CursorEffect";

interface HomeProps {
  hasScrolledDown: boolean;
}

interface MousePosition {
  x: number;
  y: number;
}

function Home({ hasScrolledDown }: HomeProps) {
  const [scope, animate] = useAnimate();
  const cursorContainerRef = useRef(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsTitleHovered(true);
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsTitleHovered(false);
  };

  console.log(isTitleHovered);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 20,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  return (
    <>
      <main className={styles.homeContainer}>
        <Element name="landing">
          <AnimatePresence>
            {isTitleHovered && (
              <motion.div
                className={styles.cursor}
                variants={cursorVariants}
                // exit={{
                //   opacity: 0,

                //   transition: {
                //     duration: 0,
                //   },
                // }}
                animate="default"
              ></motion.div>
            )}
          </AnimatePresence>
          <div
            className={styles.titleContainer}
            ref={cursorContainerRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.titleContainerContent}>
              <h2 className={styles.sectionTitle}>
                Hello, I'm Emily Scott, a front-end engineer.
              </h2>
              {/* <CursorEffect targetDivRef={cursorContainerRef} /> */}

              <motion.img
                src={handWaveOutline}
                alt="hand wave outline"
                className={styles.handWaveOutline}
                variants={handWaveVariants}
                animate="animate"
              />
            </div>
            <div className={styles.testDivTop}></div>
            <div className={styles.testDivBottom}></div>
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
