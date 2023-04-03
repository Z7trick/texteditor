import { memo, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
interface ModalProps extends PropsWithChildren {
  title: string;
  onClose: () => void;
}
const Modal = memo(({ title, onClose, children }: ModalProps) => {
  return (
    <div role="dialog" className={styles.root}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <span className={styles.close} onClick={onClose}>
            &#10006;
          </span>
        </div>
        {children}
      </div>
    </div>
  );
});

export default Modal;
