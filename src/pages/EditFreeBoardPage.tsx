import { useEffect, useState } from "react";
import styles from "../assets/scss/EditFreeBoardPage.module.scss";
import { BasicButton } from "../components";
import ContentTop from "../components/ContentTop";
import { IcontentBoxList } from "./FreeBoardPage";

interface IEditFreeBoardPageProps {
  id?: string;
}

const EditFreeBoardPage = (props: IEditFreeBoardPageProps) => {
  const [boardInfo, setBoardInfo] = useState<IcontentBoxList>({
    id: "",
    is_notice: false,
    writer: "",
    title: "",
    content: "",
    commentCnt: 1,
  });
  useEffect(() => {
    if (props.id) {
      fetch(`/board/${props.id}`)
        .then((res) => res.json())
        .then((data) => setBoardInfo(data));
    }
  }, [props.id]);

  return (
    <div className="go_content">
      <ContentTop
        titleName={"커뮤니티 > 공지게시판 > 글쓰기"}
        path={"/freeboard"}
      />
      <div className={styles.freeboardpage_container}>
        <div className={styles.contents_container}>
          <div>제목</div>
          <input value={props.id && boardInfo.title}></input>
          <div>내용</div>
          <textarea value={props.id && boardInfo.content}></textarea>
          <div>태그</div>
          <input></input>
          <div>첨부파일</div>
          <BasicButton text="저장" path="/freeboard" />
        </div>
      </div>
    </div>
  );
};

export default EditFreeBoardPage;
