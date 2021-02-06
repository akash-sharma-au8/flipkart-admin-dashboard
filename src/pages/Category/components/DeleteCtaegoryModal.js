import React from "react";
import Modal from "../../../components/UI/Model";

const DeleteCategoryModal = (props) => {
  const {
    modalTitle,
    show,
    handleClose,
    onClick,
    expandedArray,
    checkedArray,
  } = props;
  return (
    <Modal
      modalTitle={modalTitle}
      show={show}
      handleClose={handleClose}
      buttons={[
        {
          label: "no",
          color: "primary",
          onClick: handleClose,
        },
        {
          label: "yes",
          color: "danger",
          onClick: onClick,
        },
      ]}
    >
      <h4>Expanded</h4>
      {expandedArray.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
      <h4>Checked</h4>
      {checkedArray.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
    </Modal>
  );
};

export default DeleteCategoryModal;
