import { default as BaseButton } from "./BaseButton";

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClasses?: string;
}

function PrimaryButton({
  children,
  customClasses = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <BaseButton customClasses={customClasses} {...props}>
      {children}
    </BaseButton>
  );
}

export default PrimaryButton;
