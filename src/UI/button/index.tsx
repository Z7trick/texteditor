import styles from "./styles.module.scss";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  onSubmit?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  text: string;
}

const Button = ({ type, onClick, onSubmit, text }: ButtonProps) => {
  return (
    <button
      className={styles.root}
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
