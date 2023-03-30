import React from "react";
import styles from "../../assets/scss/Modal.module.scss";

const Modal = ({ onClose, children }) => {
    console.log("모달");

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>모달</div>
            <button className="close-button" onClick={onClose}>
                X
            </button>
        </div>
    );
};

export default Modal;
