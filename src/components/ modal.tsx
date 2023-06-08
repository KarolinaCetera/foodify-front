import styled from "styled-components";
import { Icon } from "@iconify/react";
import { FC } from "react";

const StyledIngredientModal = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 11;
  }

  .modalContent {
    position: relative;
    top: 200px;
    z-index: 15;
    background: seagreen;
    height: 40vh;
    border-radius: 14px;
  }
`;

interface ModalProps {
  modalOpen: boolean;
  handleOpenModal: () => void;
}

export const Modal: FC<ModalProps> = ({ modalOpen, handleOpenModal }) => {
  if (!modalOpen) return null;

  return (
    <StyledIngredientModal>
      <div className="modalContent">
        <Icon icon="material-symbols:close" onClick={handleOpenModal} />
      </div>
    </StyledIngredientModal>
  );
};
