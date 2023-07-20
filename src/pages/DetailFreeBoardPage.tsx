import { useEffect, useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import styles from "../assets/scss/DetailFreeBoardPage.module.scss";
import { BasicButton } from "../components";
import ContentTop from "../components/ContentTop";
import { IcontentBoxList } from "./FreeBoardPage";

interface IDetailFreeBoardPageProps {
  id?: string;
}

const DetailFreeBoardPage = (props: IDetailFreeBoardPageProps) => {
  const [boardInfo, setBoardInfo] = useState<IcontentBoxList>({
    id: "",
    is_notice: false,
    writer: "",
    title: "",
    content: "",
    commentCnt: 1,
  });
  useEffect(() => {
    fetch(`/board/${props.id}`)
      .then((res) => res.json())
      .then((data) => setBoardInfo(data));
  }, [props.id]);

  return (
    <div className="go_content">
      <ContentTop
        titleName={"커뮤니티 > 공지게시판 > 상세페이지"}
        path={"/freeboard"}
      />
      <div className={styles.freeboardpage_container}>
        <div className={styles.contents_container}>
          <div>{boardInfo.title}</div>
          <div>
            2023.06.20&nbsp;
            <HiOutlineChatBubbleOvalLeftEllipsis />
            &nbsp;{boardInfo.writer}
          </div>
          <div>{boardInfo.content}</div>
          <div>태그</div>
          <div>첨부파일</div>
          <div></div>
          <BasicButton text="글수정" path="/freeboard/editfreeboard" />
          <BasicButton text="글삭제" path="/freeboard" />
        </div>
      </div>
    </div>
  );
};

export default DetailFreeBoardPage;
