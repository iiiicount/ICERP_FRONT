import styles from "../assets/scss/EditFreeBoardPage.module.scss";
import ContentTop from "../components/ContentTop";

const EditFreeBoardPage = () => {
  return (
    <div className="go_content">
      <ContentTop
        titleName={"커뮤니티 > 공지게시판 > 글쓰기"}
        path={"/freeboard"}
      />
      <div className={styles.freeboardpage_container}>
        <div className={styles.contents_container}>
          <div>제목</div>
          <input></input>
          <div>내용</div>
          <textarea></textarea>
          <div>태그</div>
          <input></input>
          <div>첨부파일</div>
        </div>
      </div>
    </div>
  );
};

export default EditFreeBoardPage;
