import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import "../../assets/scss/Board.scss";

const Board = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState("");
    const [modalOn, setModalOn] = useState(false);

    // 고유 값으로 사용 될 id
    // ref 를 사용하여 변수 담기
    const nextId = useRef(11);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setInfo(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleSave = (data) => {
        //데이터 수정하기(중요)
        if (data.id) {
            setInfo(
                info.map((row) =>
                    data.id === row.id
                        ? {
                              id: data.id,
                              name: data.name,
                              email: data.email,
                              phone: data.phone,
                              website: data.website,
                          }
                        : row
                )
            );
        } else {
            //데이터 추가하기 방법2
            setInfo((info) =>
                info.concat({
                    id: nextId.current,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                })
            );
            nextId.current += 1;
        }
    };

    const handleRemove = (id) => {
        setInfo((info) => info.filter((item) => item.id !== id));
    };

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website,
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    };

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
    };

    return (
        <div className="">
            <div className="">고객 정보 리스트</div>
            <table className="">
                <thead className="">
                    <tr className="">
                        <th className="">Id.</th>
                        <th className="">Name</th>
                        <th className="">Email</th>
                        <th className="">Phone No.</th>
                        <th className="">Website</th>
                        <th className="">Edit</th>
                        <th className="">Delete</th>
                    </tr>
                </thead>
                <Tr
                    info={info}
                    handleRemove={handleRemove}
                    handleEdit={handleEdit}
                />
            </table>
            <Post onSaveData={handleSave} />
            {modalOn && (
                <Modal
                    selectedData={selected}
                    handleCancel={handleCancel}
                    handleEditSubmit={handleEditSubmit}
                />
            )}
        </div>
    );
};

export default Board;
