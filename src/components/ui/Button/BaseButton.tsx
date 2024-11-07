import styles from "./BaseButton.module.scss";

interface BaseButtonProps {
  children: React.ReactNode;
  customClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function BaseButton({
  children,
  customClasses = "",
  onClick,
}: BaseButtonProps) {
  return (
    <button
      className={`${styles.buttonBase} ${customClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BaseButton;
