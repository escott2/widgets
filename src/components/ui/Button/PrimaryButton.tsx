import { BaseButton } from "../Button";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <BaseButton customClasses={styles.primaryButton}>{children}</BaseButton>
  );
}

export default PrimaryButton;
