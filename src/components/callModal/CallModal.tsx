import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { DefaultProps } from "../../types";
import Modal from "../UI/modal/Modal";

import { useForm } from "react-hook-form";

import { setIsCallModalVisible } from "../../redux/reducers/statesSlice";
import Input from "../UI/inputs/Input";
import ModalTitle from "../UI/modal/ModalTitle";
import BlueButton from "../UI/buttons/BlueButton";

interface ICallModalProps extends DefaultProps {}

interface IFormData {
  name: string;
}

const CallModal: React.FC<ICallModalProps> = () => {
  const { isCallModalVisible } = useAppSelector((state) => {
    return state.states;
  });

  const { register, handleSubmit, formState } = useForm<IFormData>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <Modal
      isAbleToClose={true}
      className="call-modal"
      isModalVisible={isCallModalVisible}
      setModalVisible={setIsCallModalVisible}>
      <ModalTitle className="call-modal-body__title">Заказать обратный звонок</ModalTitle>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="call-form">
        <Input autoComplete="off" className="call-form__input" placeholder="Как к вам обращаться?" type="text" />
        <BlueButton className="call-form__button">Перезвоните мне</BlueButton>
      </form>
    </Modal>
  );
};

export default CallModal;
