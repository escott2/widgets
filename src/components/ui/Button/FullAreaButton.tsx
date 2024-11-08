import { default as BaseButton } from "./BaseButton";
import styles from "./FullAreaButton.module.scss";

interface FullAreaButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function FullAreaButton({
  children,
  customClasses = "",
  ...props
}: FullAreaButtonProps) {
  return (
    <BaseButton
      customClasses={`${styles.fullAreaButton} + ${customClasses}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default FullAreaButton;
