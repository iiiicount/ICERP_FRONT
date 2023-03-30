import React, { useState } from "react";
import styles from "../../assets/scss/Grid.module.scss";
import ModalTrigger from "../Modal/ModalTrigger";

const Table = ({
    columnName = {},
    gridTestDataList = [],
    useOption = "view",
}) => {
    const keys = gridTestDataList.reduce(
        (acc, item) => [
            ...acc,
            ...Object.keys(item).filter((key) => !acc.includes(key)),
        ],
        []
    );

    return (
        <>
            <div className={styles.grid}>
                <table className={styles.grid_main}>
                    <thead>
                        <tr>
                            {keys.map((key) => (
                                <th className={styles.grid_th} key={key}>
                                    {columnName[key] ? columnName[key] : key}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {gridTestDataList.map((data) => (
                            <tr
                                className={styles.grid_tr_row}
                                key={data.order}
                                onClick={() => console.log("그리드 클릭")}
                            >
                                {keys.map((key) => (
                                    <th key={key}>
                                        {useOption === "view" ? (
                                            <span>{data[key]}</span>
                                        ) : (
                                            <input
                                                className={styles.grid_th_input}
                                            ></input>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ModalTrigger /> {/* 모달 테스트 */}
            </div>
        </>
    );
};

export default Table;
