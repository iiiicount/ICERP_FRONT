import "../assets/scss/Company.scss";
import ContentTop from "../components/ContentTop";
import { companyInfoData } from "../assets/data/MockDatas";
import { useState } from "react";

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
      <div className="contents">
        <div className="content_box">
          {companyInfo.map((info, index) => (
            <CompanyRow
              key={index}
              displayName={info.display_name}
              data={info.data}
              editable={info.editable}
            />
          ))}
        </div>
      </div>
      <div className="footer">
        <button className="btn_major">저장</button>
        <button className="btn_minor">취소</button>
      </div>
    </>
  );
};

interface CompanyRowProps {
  displayName: string;
  data: string;
  editable: boolean;
}
const CompanyRow = (props: CompanyRowProps) => {
  const [value, setValue] = useState(props.data);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className="row">
      <div className="title">{props.displayName}</div>
      {props.editable ? (
        <input className="input_content" value={value} onChange={onChange} />
      ) : (
        <span className="content">{props.data}</span>
      )}
    </div>
  );
};

export default CompanyPage;
