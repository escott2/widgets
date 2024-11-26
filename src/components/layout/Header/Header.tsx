import styles from "./Header.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../../../assets/profile-mask-blue.png";
import { Link, Button } from "react-scroll";

interface HeaderProps {
  hasScrolledDown: boolean;
}

function Header({ hasScrolledDown }: HeaderProps) {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.titleImageContainer}>
          <h1 className={styles.pageTitle}>Emily Scott</h1>
          <img src={profilePic} className={styles.profileImg} />
        </div>

        <ul className={styles.navList}>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={0}
              className={styles.link}
              onSetActive={() => handleTabClick("Projects")}
            >
              Projects
              {selectedTab === "Projects" && (
                <motion.div className={styles.underline} layoutId="underline" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-120}
              duration={0}
              className={styles.link}
              onSetActive={() => handleTabClick("About")}
            >
              About
              {selectedTab === "About" && (
                <motion.div className={styles.underline} layoutId="underline" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={0}
              className={styles.link}
              onSetActive={() => handleTabClick("Contact")}
            >
              Contact
              {selectedTab === "Contact" && (
                <motion.div className={styles.underline} layoutId="underline" />
              )}
            </Link>
          </li>
        </ul>
        <Button
          to="landing"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className={`${styles.scrollToTopButton} ${
            hasScrolledDown && styles.emphasizeButton
          }`}
          onSetActive={() => handleTabClick("Landing")}
        >
          Back to Top
        </Button>
      </div>
    </header>
  );
}

export default Header;
