import Button from "../../UI/button";
import styles from "./styles.module.scss";
interface ModalProps {
  title: string;
  descr: string;
  buttonText: string;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}
const Modal = ({ title, descr, buttonText, onSubmit }: ModalProps) => {
  return (
    <div className={styles.root}>
      <div>
        <h3>{title}</h3>
        <span>&#10006;</span>
      </div>
      <form onSubmit={onSubmit}>
        <Button type="submit" text={buttonText} />
      </form>
    </div>
  );
};

export default Modal;
