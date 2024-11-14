import { WidgetContainer } from "../../components/layout";
import styles from "./WelcomeWidget.module.scss";

interface WelcomeWidgetProps {
  name: string;
}

function WelcomeWidget({ name }: WelcomeWidgetProps) {
  return (
    <WidgetContainer customClasses={styles.welcomeWidgetContainer}>
      <p>Good Morning{name && ` ${name}`}</p>
    </WidgetContainer>
  );
}

export default WelcomeWidget;
