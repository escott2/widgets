import styles from "./FlexWrapContainer.module.scss";

interface FlexWrapContainerProps {
  children?: React.ReactNode;
  customClasses?: string;
}

function FlexWrapContainer({
  children,
  customClasses = "",
}: FlexWrapContainerProps) {
  return (
    <div className={`${styles.flexWrapContainer} + ${customClasses}`}>
      {children}
    </div>
  );
}

export default FlexWrapContainer;
