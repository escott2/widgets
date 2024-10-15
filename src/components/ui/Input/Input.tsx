import styles from "./Input.module.scss";

interface InputProps {
  label?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customInputClasses?: string;
  hint?: string;
  customLabelClasses?: string;
  error?: string;
}

function Input({
  label,
  type,
  value,
  onChange,
  customInputClasses = "",
  hint,
  customLabelClasses = "",
  error,
}: InputProps) {
  return (
    <>
      {label && (
        <label className={`${styles.label} ${customLabelClasses}`}>
          {label}
        </label>
      )}
      {hint && <p className={styles.hint}>{hint}</p>}
      {error && <p className={styles.error}>{error}</p>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${customInputClasses}`}
      />
    </>
  );
}

export default Input;
