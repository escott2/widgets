import { default as BaseButton } from "./BaseButton";

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function PrimaryButton({
  children,
  customClasses = "",
  ...rest
}: PrimaryButtonProps) {
  return (
    <BaseButton customClasses={customClasses} {...rest}>
      {children}
    </BaseButton>
  );
}

export default PrimaryButton;
