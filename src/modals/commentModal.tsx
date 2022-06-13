import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import MainModal from "src/components/Modal";
import { hideModal } from "src/reducers/modal";

const CommentModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.modal.showModal);

  const cancelModal = () => {
    dispatch(hideModal());
  };

  const addComment = () => {
    dispatch(hideModal());
  };

  return (
    <MainModal
      title="Add Comment"
      onOkay={addComment}
      onCancel={cancelModal}
      visible={showModal}
    >
      <div>There are some contents</div>
    </MainModal>
  );
};

export default CommentModal;
