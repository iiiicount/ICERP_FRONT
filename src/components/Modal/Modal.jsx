import React from "react";
import styles from "../../assets/scss/Modal.module.scss";

const Modal = ({ title, onClose, onSaveData, children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_wrapper}>
                <header>
                    <h1>{title}</h1>
                    <button className="btn_layer_x" onClick={onClose}>
                        X
                    </button>
                </header>
                <div className={styles.modal_content}>{children}</div>
                <footer>
                    <button className={styles.btn_major_s} onClick={onSaveData}>
                        확인
                    </button>
                    <button className={styles.btn_minor_s} onClick={onClose}>
                        취소
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
