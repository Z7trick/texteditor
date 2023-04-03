import { PropsWithChildren } from "react";
import Modal from "../../../../components/Modal/Modal";
import Portal from "../../../../components/Portal/Portal";
import Overlay from "../Overlay/Overlay";
interface PopupProps extends PropsWithChildren {
  isOpened: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}
const CreationModal = ({
  isOpened,
  onSubmit,
  onClose,
  children,
}: PopupProps) => {
  if (!isOpened) {
    return null;
  }
  return (
    <Portal>
      <Modal onClose={onClose} title="Создание заметки" onSubmit={onSubmit}>
        <Overlay onClick={onClose} />
        {children}
      </Modal>
    </Portal>
  );
};

export default CreationModal;
