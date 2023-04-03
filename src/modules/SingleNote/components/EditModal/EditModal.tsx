import { PropsWithChildren } from "react";
import Modal from "../../../../components/Modal/Modal";
import Portal from "../../../../components/Portal/Portal";
import Overlay from "../Overlay/Overlay";
interface EditModalProps extends PropsWithChildren {
  isOpened: boolean;
  onClose: () => void;
}
const EditModal = ({ isOpened, onClose, children }: EditModalProps) => {
  if (!isOpened) {
    return null;
  }
  return (
    <Portal>
      <Modal onClose={onClose} title="Редактирование заметки">
        <Overlay onClick={onClose} />
        {children}
      </Modal>
    </Portal>
  );
};

export default EditModal;
