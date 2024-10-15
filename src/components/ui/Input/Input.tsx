import styles from "./Input.module.scss";

interface InputProps {
  label?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hint?: string;
}

function Input({
  label,
  type,
  value,
  onChange,
  className = "",
  hint,
}: InputProps) {
  return (
    <>
      {label && (
        <label className={`${styles.label} ${hint && styles.labelAboveHint}`}>
          {label}
        </label>
      )}
      {hint && <p className={styles.hint}>{hint}</p>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className}`}
      />
    </>
  );
}

export default Input;
