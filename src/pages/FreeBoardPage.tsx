import ContentBox from "../components/ContentBox";
import ContentTop from "../components/ContentTop";
import styles from "../assets/scss/FreeBoardPage.module.scss";
import SideBar from "../components/SideBar";
import TabContent from "../components/TabContent";
import BasicButton from "../components/BasicButton";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export interface IcontentBoxList {
  id: string;
  is_notice: boolean;
  writer: string;
  title: string;
  content: string;
  commentCnt: 1;
}

//목데이터 가져오기

const FreeBoardPage = () => {
  const [category, setCategory] = useState([{}]);
  const [contentBoxList, setContentBoxList] = useState<IcontentBoxList[]>([]);

  useEffect(() => {
    fetch(`/board`)
      .then((res) => res.json())
      .then((data: IcontentBoxList[]) => {
        setContentBoxList(data);

        setCategory([
          {
            name: "전체게시판",
            content: contentBoxList.map((contentbox, index) => {
              return (
                <ContentBox
                  key={index}
                  id={contentbox.id}
                  writer={contentbox.writer}
                  title={contentbox.title}
                  contents={contentbox.content}
                  commentCnt={1}
                />
              );
            }),
          },
          {
            name: "공지 사항",
            content: contentBoxList
              .filter((contentBox) => {
                return contentBox.is_notice === true;
              })
              .map((contentbox, index) => {
                return (
                  <ContentBox
                    key={index}
                    id={contentbox.id}
                    writer={contentbox.writer}
                    title={contentbox.title}
                    contents={contentbox.content}
                    commentCnt={contentbox.commentCnt}
                  />
                );
              }),
          },
        ]);
      });
  }, []);

  return (
    <div className="go_content">
      <ContentTop titleName={"커뮤니티 > 게시판"} path={"/freeboard"} />
      <div className={styles.freeboardpage_container}>
        <div className={styles.contents_container}>
          <TabContent category={category} />
        </div>
        <div className={styles.sidebar_container}>
          <SideBar>
            <BasicButton text="글쓰기" path="/freeboard/editfreeboard" />
            <div className={styles.sidebar_header}>공지 사항</div>
            {contentBoxList
              .filter((contentBox) => {
                return contentBox.is_notice === true;
              })
              .map((contentbox, index) => {
                return (
                  <Link to={`/detailfreeboardpage/${contentbox.id}`}>
                    <div key={index} className={styles.sidebar_contents}>
                      {contentbox.title}&nbsp;
                      <HiOutlineChatBubbleOvalLeftEllipsis />
                      &nbsp;
                      {contentbox.commentCnt}
                    </div>
                  </Link>
                );
              })}
          </SideBar>
        </div>
      </div>
    </div>
  );
};

export default FreeBoardPage;
