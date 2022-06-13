import React, { FC, useState } from "react";

import BaseModal from "src/containers/BaseModal";

import { Modal } from "antd";

const MainModal: FC<MainModalTypes> = ({
  title,
  visible,
  onOkay,
  onCancel,
  children,
}) => {
  console.log(onOkay);
  return (
    <BaseModal show={visible}>
      <Modal
        onOk={onOkay}
        onCancel={onCancel}
        title={title}
        visible={true}
        centered
      >
        {children}
      </Modal>
    </BaseModal>
  );
};

type MainModalTypes = {
  title: string;
  visible: boolean;
  onOkay: Function;
  onCancel: Function;
  children: any;
};

export default MainModal;
