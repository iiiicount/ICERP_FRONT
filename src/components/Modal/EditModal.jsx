import React from "react";
import Modal from "./Modal";

const EditModal = ({ item, onClose }) => {
    console.log(item);
    return (
        <Modal onClose={onClose}>
            {Object.keys(item).map((key) => (
                <input key={key} type="text" defaultValue={item[key]} />
            ))}
        </Modal>
    );
};

export default EditModal;
