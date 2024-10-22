import styles from "./WidgetContainer.module.scss";

interface WidgetContainerProps {
  children?: React.ReactNode;
  customClasses?: string;
  title?: string;
  empty?: boolean;
}

function WidgetContainer({
  children,
  customClasses = "",
  title,
  empty = false,
}: WidgetContainerProps) {
  const classes = empty
    ? `${styles.empty} ${styles.widgetContainer} ${customClasses}`
    : `${styles.widgetContainer} ${customClasses}`;

  return (
    <div className={classes}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children && children}
    </div>
  );
}

export default WidgetContainer;
