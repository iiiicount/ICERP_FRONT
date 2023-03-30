import React, { useState } from "react";
import Modal from "./Modal";

const ModalTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            {isOpen && <Modal onClose={handleCloseModal}>Modal Content</Modal>}
        </div>
    );
};

export default ModalTrigger;
