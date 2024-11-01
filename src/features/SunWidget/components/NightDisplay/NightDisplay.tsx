import { WidgetContainer } from "../../../../components/layout";
import styles from "./NightDisplay.module.scss";

interface NightDisplayProps {
  sunriseTime: string | false;
  sunsetTime: string | false;
}

function NightDisplay({ sunriseTime, sunsetTime }: NightDisplayProps) {
  return (
    <WidgetContainer
      title="Sun"
      customClasses={styles.nightDisplayWidgetContainer}
    >
      <p>The sun has set for the day.</p>
      {sunriseTime ? <h4>Sunrise was at {sunriseTime}</h4> : <p>N/A</p>}
      {sunsetTime ? <h4>Sunset was at {sunsetTime}</h4> : <p>N/A</p>}
    </WidgetContainer>
  );
}

export default NightDisplay;
