import { employeeInfoData } from "../assets/data/MockDatas";
import ContentTop from "../components/ContentTop";
import styles from "../assets/scss/Employee.module.scss";
import EditModal from "../components/Modal/EditModal";
import Pagenation from "../components/Pagenation/Pagenation";
import Table from "../components/Table/Table";
import Footer from "../components/Footer";
import { useState } from "react";

const columnName = {
    number: "사원번호",
    name: "이름",
    department: "부서",
    rank: "직위/직급",
    authority: "권한",
    extensionNumber: "내선번호",
    phoneNumber: "핸드폰번호",
    email: "이메일",
};

const EmployeePage = () => {
    const [popUp, setPopUp] = useState<typeof columnName | null>(null);
    const [currentPage, setCurrentPage] = useState(1); //현재 페이지
    const [numberOfPosts, setNumberOfPosts] = useState(10); //게시글 개수
    const [numberOfPages, setNumberOfPages] = useState(10); //페이지 개수

    const onClickPageButton = (page: number) => {
        console.log("페이지네이션 클릭", page);
        setCurrentPage(page);
    };

    const [data, setData] = useState(employeeInfoData.map((item) => ({ ...item, checked: false })));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name !== "checkAll") {
            return setData((prev) =>
                prev.map((item) => (item.id === name ? { ...item, checked } : item))
            );
        }
        setData((prev) => prev.map((item) => ({ ...item, checked })));
    };

    return (
        <div className="go_content">
            <ContentTop titleName={"사원 관리"} path={"/employee"} />
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
                        title={"정보 수정"}
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

export default EmployeePage;
