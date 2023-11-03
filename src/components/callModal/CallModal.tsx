import React, { useRef } from "react";
import { DefaultProps } from "../../types";
import Modal from "../UI/modal/Modal";
import { useAppSelector } from "../../redux/hooks";

import { setIsCallModalVisible } from "../../redux/reducers/statesSlice";
import ModalTitle from "../UI/modal/ModalTitle";

interface ICallModalProps extends DefaultProps {}

const CallModal: React.FC = () => {
  const { isCallModalVisible } = useAppSelector((state) => {
    return state.states;
  });

  return (
    <Modal
      isAbleToClose={true}
      className="call-modal"
      isModalVisible={isCallModalVisible}
      setModalVisible={setIsCallModalVisible}>
      <ModalTitle className="call-modal-body__title">Заказать обратный звонок</ModalTitle>
    </Modal>
  );
};

export default CallModal;
