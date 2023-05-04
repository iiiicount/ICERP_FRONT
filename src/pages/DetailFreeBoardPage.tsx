import { useParams } from "react-router-dom";
import { contentBoxListDatas } from "../assets/data/MockDatas";
import styles from "../assets/scss/DetailFreeBoardPage.module.scss";
import ContentTop from "../components/ContentTop";
import Comment from "../components/Comment";
interface contentBox {
  writer?: string;
  writerImg?: string;
  title?: string;
  contents?: string;
  createdDate?: string;
  commentCnt?: number;
}

const DetailFreeBoardPage = () => {
  let { freeboardpageid } = useParams();
  let Datas: contentBox[] = contentBoxListDatas.filter((content) => {
    return content.id == freeboardpageid;
  });
  return (
    <div className="go_content">
      <ContentTop
        titleName={"커뮤니티 > 공지게시판 > 상세페이지"}
        path={"/freeboard"}
      />
      <div className={styles.freeboardpage_container}>
        <div className={styles.contents_container}>
          <div>{Datas[0].title}</div>
          <div>
            {Datas[0].createdDate}&nbsp;
            {Datas[0].writerImg}&nbsp;{Datas[0].writer}
          </div>
          <div>{Datas[0].contents}</div>
          <div>태그</div>
          <div>첨부파일</div>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default DetailFreeBoardPage;
