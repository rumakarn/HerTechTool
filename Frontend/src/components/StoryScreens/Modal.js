// Modal.js

import React from "react";
import "../../Css/Modal.css";

const Modal = ({ show, onClose, children }) => {
  const modalStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="Modal" style={modalStyles}>
      <div className="Modal-content">
        <span className="Close-button" onClick={onClose}>
          ×
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
