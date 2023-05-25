import style from "../assets/scss/Company.module.scss";
import { ContentTop, EditInfo } from "../components";
import { companyInfoData } from "../assets/data/MockDatas";

const companyInfo = [
  { display_name: "사업자번호", data: companyInfoData.business_number, editable: false },
  { display_name: "회사/상호", data: companyInfoData.company_name, editable: false },
  { display_name: "대표자", data: companyInfoData.ceo_name, editable: false },
  { display_name: "업태", data: companyInfoData.business_type, editable: true },
  { display_name: "종목", data: companyInfoData.business_item, editable: true },
  { display_name: "전화번호", data: companyInfoData.number, editable: true },
  { display_name: "FAX번호", data: companyInfoData.fax_number, editable: true },
  { display_name: "이메일", data: companyInfoData.email, editable: true },
  { display_name: "주소", data: companyInfoData.address, editable: true },
  { display_name: "소개", data: companyInfoData.introduction, editable: true },
];

const CompanyPage = () => {
  return (
    <>
      <div className="go_content">
        <ContentTop titleName={"회사 관리"} path={"/"} />
      </div>
      <div className={style.contents}>
        <div className={style.content_box}>
          <EditInfo info={companyInfo} />
        </div>
      </div>
      <div className={style.footer}>
        <button className={style.btn_major}>저장</button>
        <button className={style.btn_minor}>취소</button>
      </div>
    </>
  );
};

export default CompanyPage;
