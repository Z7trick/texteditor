import { PropsWithChildren } from "react";
import Modal from "../../../../components/Modal/Modal";
import Portal from "../../../../components/Portal/Portal";
import Overlay from "../Overlay/Overlay";
interface CreationModalProps extends PropsWithChildren {
  isOpened: boolean;
  onClose: () => void;
}
const CreationModal = ({ isOpened, onClose, children }: CreationModalProps) => {
  if (!isOpened) {
    return null;
  }
  return (
    <Portal>
      <Modal onClose={onClose} title="Создание заметки">
        <Overlay onClick={onClose} />
        {children}
      </Modal>
    </Portal>
  );
};

export default CreationModal;
