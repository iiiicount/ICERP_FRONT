import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../../assets/scss/Modal.module.scss";

const EditModal = ({ title, columnName, item, onClose }) => {
    const [usrInputs, setUsrInputs] = useState(item);

    const onSaveData = () => {
        handleSubmit();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        //함수로 지정하는게 좋음
        setUsrInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        console.log("제출 클릭", usrInputs);
        //API 요청 데이터 추가
    };

    return (
        <Modal title={title} onClose={onClose} onSaveData={onSaveData}>
            <ul>
                {Object.keys(item).map((key) => (
                    <li key={key} className={styles.column_wrapper}>
                        <div key={columnName[key]}>{columnName[key]}</div>
                        <input
                            key={key}
                            type="text"
                            name={key}
                            defaultValue={item[key]}
                            onChange={handleChange}
                        />
                    </li>
                ))}
            </ul>
        </Modal>
    );
};

export default EditModal;
