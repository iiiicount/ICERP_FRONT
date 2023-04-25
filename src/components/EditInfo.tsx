import { useState } from "react";
import style from "../assets/scss/EditInfo.module.scss";

interface IEditInfProps {
  info: any[];
}

const EditInfo = (props: IEditInfProps) => {
  return (
    <>
      {props.info.map((info, index) => (
        <InfoRow
          key={index}
          displayName={info.display_name}
          data={info.data}
          editable={info.editable}
        />
      ))}
    </>
  );
};

interface IInfoRowProps {
  displayName: string;
  data: string;
  editable: boolean;
}
const InfoRow = (props: IInfoRowProps) => {
  const [value, setValue] = useState(props.data);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className={style.row}>
      <div className={style.title}>{props.displayName}</div>
      {props.editable ? (
        <input className={style.input_content} value={value} onChange={onChange} />
      ) : (
        <span className={style.content}>{props.data}</span>
      )}
    </div>
  );
};

export default EditInfo;
