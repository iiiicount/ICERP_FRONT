import React from "react";

const Td = ({ item, handleRemove, handleEdit }) => {
    const onRemove = () => {
        handleRemove(item.id);
    };

    const onEdit = () => {
        handleEdit(item);
    };

    return (
        <>
            <tr className="">
                <td className="">{item.id}</td>
                <td className="">{item.name}</td>
                <td className="">{item.email}</td>
                <td className="">{item.phone}</td>
                <td className="">{item.website}</td>
                <td onClick={onEdit} className="">
                    <i class=""></i>
                </td>
                <td onClick={onRemove} className="">
                    <i class=""></i>
                </td>
            </tr>
        </>
    );
};

export default Td;
