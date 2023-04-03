import React, { useState, useEffect } from "react";
import ContentTop from "../components/ContentTop";
import EditModal from "../components/Modal/EditModal";
import Pagenation from "../components/Pagenation/Pagenation";
import Table from "../components/Table/Table";

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
        order: "01",
        code: "A0001",
        name: "바밤바",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
    {
        order: "02",
        code: "A0002",
        name: "비비빅",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
    {
        order: "03",
        code: "A0003",
        name: "캔디바",
        cost: "500",
        count: "50",
        unitCost: "200",
    },
    {
        order: "04",
        code: "A0004",
        name: "투게더",
        cost: "5000",
        count: "100",
        unitCost: "3000",
    },
    {
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

    return (
        <div className="go_content">
            <ContentTop titleName={"판매"} path={"/sale"} />
            <div className="content_page">
                <Table
                    columnName={columnName}
                    tableDataList={tableDataList}
                    onClick={setPopUp}
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
            <Pagenation
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                onClick={onClickPageButton}
            />
        </div>
    );
};

export default SalePage;
