import React, { useState, useEffect } from "react";
import styles from "../../assets/scss/Table.module.scss";

const Table = ({
    columnName = {},
    tableDataList = [],
    useOption = "view",
    onClick,
    onChange = (e) => {},
    usingCheck = false,
}) => {
    /**
     * 체크박스 로직
     */
    const [isChecked, setIsChecked] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const checkedData = tableDataList.filter((_, index) => isChecked[index]);
        console.log(checkedData);
    };

    /**
     * 테이블 상단 컬럼 만들기
     */
    const keys = tableDataList.reduce(
        (acc, item) => [...acc, ...Object.keys(item).filter((key) => !acc.includes(key))],
        []
    );

    const allChecked = tableDataList.every(({ checked }) => checked);

    return (
        <>
            <div className={styles.table}>
                <table className={styles.grid_main}>
                    <thead>
                        <tr>
                            {usingCheck && (
                                // 헤더체크박스
                                <th>
                                    <input
                                        type="checkbox"
                                        name="checkAll"
                                        checked={allChecked}
                                        onChange={onChange}
                                    />
                                </th>
                            )}

                            {keys.map((key) => (
                                <th className={styles.grid_th} key={key}>
                                    {columnName[key] ? columnName[key] : key}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataList.map((data) => (
                            <tr className={styles.grid_tr_row} key={data.id}>
                                {usingCheck && (
                                    <th>
                                        <input
                                            type="checkbox"
                                            name={data.id}
                                            checked={data.checked}
                                            onChange={onChange}
                                        />
                                    </th>
                                )}
                                {keys.map((key) => (
                                    <th key={key} onClick={(prev) => onClick(data)}>
                                        {useOption === "view" ? (
                                            <span>{data[key]}</span>
                                        ) : (
                                            <input className={styles.grid_th_input}></input>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
