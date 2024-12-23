import { FlexWrapContainer } from "../../../../components/";
import styles from "./SunStatus.module.scss";

interface SunStatusProps {
  percentDaylightRemaining: number | null | undefined;
}

function SunStatus({ percentDaylightRemaining }: SunStatusProps) {
  const isBeforeSunrise =
    percentDaylightRemaining && percentDaylightRemaining > 100;
  const isSunUp = percentDaylightRemaining && percentDaylightRemaining <= 100;

  return (
    <div className={styles.sunStatusContainer}>
      {isBeforeSunrise ? (
        <>
          <FlexWrapContainer customClasses={styles.firstStatusContainer}>
            <h4>Status:</h4>
            <p>The sun has not risen yet.</p>
          </FlexWrapContainer>
          <FlexWrapContainer>
            <h4>Percent daylight remaining:</h4> <p>100%</p>
          </FlexWrapContainer>
        </>
      ) : isSunUp ? (
        <>
          <FlexWrapContainer customClasses={styles.firstStatusContainer}>
            <h4>Status:</h4>
            <p>The sun is up</p>
          </FlexWrapContainer>
          <FlexWrapContainer>
            <h4>Percent daylight remaining:</h4>{" "}
            <p>{percentDaylightRemaining}%</p>
          </FlexWrapContainer>
        </>
      ) : (
        <>
          <FlexWrapContainer customClasses={styles.firstStatusContainer}>
            <h4>Status:</h4>
            <p>The sun has set for the day.</p>
          </FlexWrapContainer>
          <FlexWrapContainer>
            <h4>Percent daylight remaining:</h4> <p>0%</p>
          </FlexWrapContainer>
        </>
      )}
    </div>
  );
}

export default SunStatus;
