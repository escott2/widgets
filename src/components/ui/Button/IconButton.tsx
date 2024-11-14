import { default as BaseButton } from "./BaseButton";
import styles from "./IconButton.module.scss";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function IconButton({
  children,
  customClasses = "",
  ...props
}: IconButtonProps) {
  return (
    <BaseButton
      customClasses={`${styles.iconButton} + ${customClasses}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default IconButton;
