import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainModal from "src/components/Modal";
import { hideModal } from "src/reducers/modal";

import { Input } from "antd";
const { TextArea } = Input;

const CommentModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.modal.showModal);
  const [comment, setComment] = useState("");

  const cancelModal = () => {
    setComment("");
    dispatch(hideModal());
  };

  const addComment = () => {
    console.log(comment);
    dispatch(hideModal());
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <MainModal
      title="Add Comment"
      onOkay={addComment}
      onCancel={cancelModal}
      visible={showModal}
      confirmText="Add Comment"
    >
      <TextArea rows={3} value={comment} onChange={onChange} />
    </MainModal>
  );
};

export default CommentModal;
