import { CloseIcon } from "../../../assets/icons/closeIcon";
import { Button } from "../button/button";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  buttonClose?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  buttonClose,
  onClose,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {buttonClose && (
          <div className="modal_header">
            <Button onClick={onClose} className="button_close">
              <CloseIcon />
            </Button>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
