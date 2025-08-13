import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 25px;
  border-radius: 10px;
  min-width: 300px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => props.bg || "#007bff"};
  color: white;
`;

export default function ConfirmModal({ isOpen, onConfirm, onCancel }) {
  return (
    <Overlay isOpen={isOpen}>
      <ModalBox>
        <p>Are you sure you want to delete this record?</p>
        <ButtonGroup>
          <Button bg="#dc3545" onClick={onConfirm}>
            Delete
          </Button>
          <Button bg="#6c757d" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
}
