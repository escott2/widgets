import { default as BaseButton } from "./BaseButton";
import styles from "./FullAreaButton.module.scss";

interface FullAreaButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function FullAreaButton({
  children,
  customClasses = "",
  ...rest
}: FullAreaButtonProps) {
  return (
    <BaseButton
      customClasses={`${styles.fullAreaButton} + ${customClasses}`}
      {...rest}
    >
      {children}
    </BaseButton>
  );
}

export default FullAreaButton;
