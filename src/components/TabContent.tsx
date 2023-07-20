import { useState } from "react";
import "../assets/scss/TabContent.scss";

const TabContent = ({ category }: any) => {
  const [taps, setTaps] = useState(0);

  const tapClick = (index: number) => {
    setTaps(index);
  };
  return (
    <div>
      <ul className="tablist_container">
        {category.map((val: any, idx: number) => {
          return (
            <li
              id={`tab_${idx}`}
              className={taps === idx ? "border_bottom" : ""}
              key={idx}
              onClick={() => tapClick(idx)}
            >
              {val.name}
            </li>
          );
        })}
      </ul>
      {category[taps].content}
    </div>
  );
};

export default TabContent;
