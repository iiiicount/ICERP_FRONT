import React, { useState, useEffect, ChangeEvent } from "react";
import ContentTop from "../components/ContentTop";
import EditModal from "../components/Modal/EditModal";
import Pagenation from "../components/Pagenation/Pagenation";
import Table from "../components/Table/Table";
import Footer from "../components/Footer";

const columnName = {
    order: "순서",
    code: "품목코드",
    name: "품목명",
    cost: "금액",
    count: "수량",
    unitCost: "단가",
};

const tableDataList = [
    {
        id: "1",
        order: "01",
        code: "A0001",
        name: "바밤바",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
    {
        id: "2",
        order: "02",
        code: "A0002",
        name: "비비빅",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
    {
        id: "3",
        order: "03",
        code: "A0003",
        name: "캔디바",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
    {
        id: "4",
        order: "04",
        code: "A0004",
        name: "투게더",
        cost: "5000",
        count: "100",
        unitCost: "3000",
    },
    {
        id: "5",
        order: "05",
        code: "A0005",
        name: "메로나",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
];

const SalePage = () => {
    const [popUp, setPopUp] = useState<typeof columnName | null>(null);
    const [currentPage, setCurrentPage] = useState(1); //현재 페이지
    const [numberOfPosts, setNumberOfPosts] = useState(10); //게시글 개수
    const [numberOfPages, setNumberOfPages] = useState(10); //페이지 개수

    const onClickPageButton = (page: number) => {
        console.log("페이지네이션 클릭", page);
        setCurrentPage(page);
    };

    const [data, setData] = useState(
        tableDataList.map((item) => ({ ...item, checked: false }))
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name !== "checkAll") {
            return setData((prev) =>
                prev.map((item) =>
                    item.id === name ? { ...item, checked } : item
                )
            );
        }
        setData((prev) => prev.map((item) => ({ ...item, checked })));
    };

    return (
        <div className="go_content">
            <ContentTop titleName={"판매"} path={"/sale"} />
            <div className="content_page">
                <Table
                    columnName={columnName}
                    tableDataList={data}
                    onClick={setPopUp}
                    onChange={handleChange}
                    usingCheck={true}
                />
                {popUp !== null && (
                    <EditModal
                        title={"판매수정"}
                        columnName={columnName}
                        item={popUp}
                        onClose={() => setPopUp(null)}
                    />
                )}
            </div>
            <Footer data={data}></Footer>
            <Pagenation
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                onClick={onClickPageButton}
            />
        </div>
    );
};

export default SalePage;
