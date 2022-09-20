import React from "react";

const Dialog = ({ title, isOpen, children, onClose }) => {
  if (isOpen) {
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{title}</h4>
          <button onClick={onClose} className="dialog__close-btn">
            +
          </button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    );
  }
  return null;
};

export default Dialog;
