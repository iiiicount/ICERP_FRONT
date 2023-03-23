import "../assets/scss/Company.scss";
import ContentTop from "../components/ContentTop";

const companyInfo = [
    { display_name: "사업자번호", data: "0000000000001" },
    { display_name: "회사/상호", data: "ICount" },
    { display_name: "대표자", data: "하연이" },
    { display_name: "업태", data: "서비스" },
    { display_name: "종목", data: "소프트웨어개발공급" },
    { display_name: "전화번호", data: "02-1111-2222" },
    { display_name: "FAX번호", data: "02-1111-2222" },
    { display_name: "이메일", data: "ictount@icounterp.co.kr" },
    { display_name: "법인번호", data: "000011112222" },
    { display_name: "종사업자번호", data: "000011112222" },
    { display_name: "주소", data: "구로 에이스하이엔드타워 2차 804호 회의실" },
    {
        display_name: "소개",
        data: "이카운트 최대 라이벌 월 39000원 아이카운트",
    },
];

const CompanyPage = () => {
    return (
        <>
            <div className="go_content">
                <ContentTop titleName={"회사 관리"} path={"/"} />
            </div>
            <div className="contents">
                <span>ICount 기본 정보</span>
                <div className="content_box">
                    {companyInfo.map((info) => (
                        <CompanyRow
                            displayName={info.display_name}
                            data={info.data}
                        />
                    ))}
                </div>
                <button>수정</button>
            </div>
        </>
    );
};

interface CompanyRowProps {
    displayName: string;
    data: string;
}
const CompanyRow = (props: CompanyRowProps) => {
    return (
        <div className="row">
            <div className="title">{props.displayName}</div>
            <span className="content">{props.data}</span>
        </div>
    );
};

export default CompanyPage;
