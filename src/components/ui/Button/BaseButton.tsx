import styles from "./BaseButton.module.scss";

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function BaseButton({
  children,
  customClasses = "",
  ...props
}: BaseButtonProps) {
  return (
    <button className={`${styles.buttonBase} ${customClasses}`} {...props}>
      {children}
    </button>
  );
}

export default BaseButton;
