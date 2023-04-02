import React from "react";
import styles from "../../assets/scss/Modal.module.scss";

const Modal = ({ onClose, children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>{children}</div>
            <button className="close-button" onClick={onClose}>
                X
            </button>
        </div>
    );
};

export default Modal;
