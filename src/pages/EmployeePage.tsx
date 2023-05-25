import { employeeInfoData } from "../assets/data/MockDatas";
import ContentTop from "../components/ContentTop";
import styles from "../assets/scss/Employee.module.scss";

const EmployeePage = () => {
  const tableHeader = [
    { label: "사원번호", value: "employeeNumber" },
    { label: "이름", value: "name" },
    { label: "부서", value: "department" },
    { label: "직위/직급", value: "rank" },
    { label: "권한", value: "authority" },
    { label: "내선번호", value: "extensionNumber" },
    { label: "핸드폰번호", value: "phoneNumber" },
    { label: "이메일", value: "email" },
  ];

  return (
    <>
      <div className="go_content">
        <ContentTop titleName={"사원 관리"} path={"/employee"} />
        <div className={styles.contents}>
          <div className={styles.toolbar}>
            <div></div>
            <div>
              <button className="btn_minor">선택삭제</button>
              <button className="btn_major">사원등록</button>
            </div>
          </div>
          <Table headers={tableHeader} items={employeeInfoData} selectable={true}></Table>
        </div>
      </div>
    </>
  );
};

export interface ITableProps {
  headers: { label: string; value: string }[];
  items: any[];
  selectable: boolean;
}

const Table = (props: ITableProps) => {
  const headerKey = props.headers.map((header) => header.value);

  return (
    <table>
      <thead>
        <tr>
          {props.selectable && (
            <th>
              <input type="checkbox" />
            </th>
          )}
          {props.headers.map((header) => (
            <th key={header.label}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <tr key={index}>
            {props.selectable && (
              <td>
                <input type="checkbox" />
              </td>
            )}
            {headerKey.map((key) => (
              <td key={key + index}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeePage;
