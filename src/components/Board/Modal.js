import React, { useState } from "react";

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
    const [edited, setEdited] = useState(selectedData);

    const onCancel = () => {
        handleCancel();
    };

    const onEditChange = (e) => {
        setEdited({
            //문법
            ...edited,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleEditSubmit(edited);
    };

    return (
        <div className="">
            <div className="">
                <div className="">
                    <h3 className="">고객 정보 수정하기</h3>
                    <i className="" onClick={onCancel}></i>
                </div>
                <form onSubmit={onSubmitEdit}>
                    <div class="">
                        <div>ID: {edited.id}</div>
                        <div>
                            Name:{" "}
                            <input
                                className=""
                                type="text"
                                name="name"
                                value={edited.name}
                                onChange={onEditChange}
                            />
                        </div>
                        <div>
                            Email:{" "}
                            <input
                                className=""
                                type="text"
                                name="email"
                                value={edited.email}
                                onChange={onEditChange}
                            />
                        </div>
                        <div>
                            Phone:{" "}
                            <input
                                className=""
                                type="text"
                                name="phone"
                                value={edited.phone}
                                onChange={onEditChange}
                            />
                        </div>
                        <div>
                            Website:{" "}
                            <input
                                className=""
                                type="text"
                                name="website"
                                value={edited.website}
                                onChange={onEditChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        <button className="" onClick={onCancel}>
                            취소
                        </button>
                        <button type="submit" className="">
                            수정
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
