import styles from "./BaseButton.module.scss";

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function BaseButton({
  children,
  customClasses = "",
  ...rest
}: BaseButtonProps) {
  return (
    <button className={`${styles.buttonBase} ${customClasses}`} {...rest}>
      {children}
    </button>
  );
}

export default BaseButton;
