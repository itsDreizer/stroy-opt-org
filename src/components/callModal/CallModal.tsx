import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { DefaultProps } from "../../types";
import Modal from "../UI/modal/Modal";

import { useForm, SubmitHandler } from "react-hook-form";

import { setIsCallModalVisible } from "../../redux/reducers/statesSlice";
import Input from "../UI/inputs/Input";
import ModalTitle from "../UI/modal/ModalTitle";
import BlueButton from "../UI/buttons/BlueButton";

import "./CallModal.scss";
import { useIMask } from "react-imask";

interface ICallModalProps extends DefaultProps {}

interface IFormData {
  name: string;
  phone: string;
}

const CallModal: React.FC<ICallModalProps> = () => {
  const [phoneInputMask, setPhoneInputMask] = useState({ mask: `{+7 (000) 000-00-00}` });
  const { isCallModalVisible } = useAppSelector((state) => {
    return state.states;
  });

  const { ref: phoneMaskRef } = useIMask(phoneInputMask);

  const { register, handleSubmit, formState } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <Modal
      isAbleToClose={true}
      className="call-modal"
      isModalVisible={isCallModalVisible}
      setModalVisible={setIsCallModalVisible}>
      <ModalTitle className="call-modal-body__title">Заказать обратный звонок</ModalTitle>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="call-form">
        <Input
          {...register("name", { required: `Заполните обязательные поля!` })}
          autoComplete="off"
          className="call-form__input"
          placeholder="Как к вам обращаться?"
          type="text"
          labelText="Ваше имя"
          isRequired={true}
        />
        <Input
          {...register("phone", {
            required: `Заполните обязательные поля!`,
            maxLength: {
              value: 12,
              message: "Кол-во символов должно быть равно 12",
            },
            minLength: {
              value: 12,
              message: "Кол-во символов должно быть равно 12",
            },
          })}
          autoComplete="off"
          className="call-form__input"
          placeholder="+7 (     )       -        -"
          type="text"
          labelText="Номер телефона"
          isRequired={true}
        />

        <BlueButton className="call-form__button">Перезвоните мне</BlueButton>
      </form>
    </Modal>
  );
};

export default CallModal;
