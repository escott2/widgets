import styles from "./UserResponseRadioButton.module.scss";
import { UserInputOption } from "../../types";

interface UserRadioRadioButton {
  option: UserInputOption;
  isChecked: boolean;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UserRadioRadioButton({
  option,
  isChecked,
  handleOptionChange,
  ...props
}: UserRadioRadioButton) {
  const classes = `${styles.radioLabel} + ${
    isChecked && styles.radioLabelChecked
  }`;
  return (
    <fieldset className={styles.radioButtonField}>
      <input
        type="radio"
        id={option.id}
        name="weather"
        value={option.value}
        onChange={handleOptionChange}
        data-transition={option.transition}
        checked={isChecked}
        className={styles.visuallyHidden}
        {...props}
      />
      <label htmlFor={option.id} className={classes}>
        {option.value}
      </label>
    </fieldset>
  );
}

export default UserRadioRadioButton;
