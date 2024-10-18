import styles from "./WidgetContainer.module.scss";

interface WidgetContainerProps {
  children: React.ReactNode;
  customClasses?: string;
  title?: string;
}

function WidgetContainer({
  children,
  customClasses,
  title,
}: WidgetContainerProps) {
  return (
    <div className={`${styles.widgetContainer} ${customClasses}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
}

export default WidgetContainer;
