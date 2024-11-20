import styles from "./Header.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../../../assets/profile-mask-blue.png";

function Header() {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleImageContainer}>
        <h1 className={styles.pageTitle}>Emily Scott</h1>
        <img src={profilePic} className={styles.profileImg} />
      </div>
      <ul className={styles.navList}>
        <li onClick={() => handleTabClick("About")}>
          About
          {selectedTab === "About" && (
            <motion.div className={styles.underline} layoutId="underline" />
          )}
        </li>
        <li onClick={() => handleTabClick("Projects")}>
          Projects
          {selectedTab === "Projects" && (
            <motion.div className={styles.underline} layoutId="underline" />
          )}
        </li>
        <li onClick={() => handleTabClick("Contact")}>
          Contact
          {selectedTab === "Contact" && (
            <motion.div className={styles.underline} layoutId="underline" />
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
