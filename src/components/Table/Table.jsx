import React from "react";
import styles from "../../assets/scss/Table.module.scss";

const Table = ({
    columnName = {},
    tableDataList = [],
    useOption = "view",
    onClick,
}) => {
    const keys = tableDataList.reduce(
        (acc, item) => [
            ...acc,
            ...Object.keys(item).filter((key) => !acc.includes(key)),
        ],
        []
    );

    return (
        <>
            <div className={styles.table}>
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
                        {tableDataList.map((data) => (
                            <tr
                                className={styles.grid_tr_row}
                                key={data.order}
                                onClick={() => onClick(data)}
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
            </div>
        </>
    );
};

export default Table;
