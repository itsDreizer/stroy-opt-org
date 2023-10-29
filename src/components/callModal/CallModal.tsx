import React, { useRef } from "react";
import { DefaultProps } from "../../types";
import Modal from "../UI/modal/Modal";
import { useAppSelector } from "../../redux/hooks";

import { setIsCallModalVisible } from "../../redux/reducers/statesSlice";

interface ICallModalProps extends DefaultProps {}

const CallModal: React.FC = () => {
  const { isCallModalVisible } = useAppSelector((state) => {
    return state.states;
  });

  return (
    <Modal isModalVisible={isCallModalVisible} setModalVisible={setIsCallModalVisible}>
      123
    </Modal>
  );
};

export default CallModal;
