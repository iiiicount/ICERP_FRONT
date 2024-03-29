import ContentBox from "../components/ContentBox";
import ContentTop from "../components/ContentTop";
import styles from "../assets/scss/FreeBoardPage.module.scss";
import SideBar from "../components/SideBar";
import TabContent from "../components/TabContent";
import BasicButton from "../components/BasicButton";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { contentBoxListDatas } from "../assets/data/MockDatas";
import { Link } from "react-router-dom";

//목데이터 가져오기
const contentBoxList = contentBoxListDatas;
const importantContents = contentBoxList.filter((contentBox) => {
    return contentBox.type == "notification";
});

const category = [
    {
        name: "전체게시판",
        content: contentBoxList.map((contentbox, index) => {
            return (
                <ContentBox
                    key={index}
                    id={contentbox.id}
                    writer={contentbox.writer}
                    title={contentbox.title}
                    contents={contentbox.contents}
                    commentCnt={contentbox.commentCnt}
                />
            );
        }),
    },
    {
        name: "공지 사항",
        content: importantContents.map((contentbox, index) => {
            return (
                <ContentBox
                    key={index}
                    id={contentbox.id}
                    writer={contentbox.writer}
                    title={contentbox.title}
                    contents={contentbox.contents}
                    commentCnt={contentbox.commentCnt}
                />
            );
        }),
    },
];

const FreeBoardPage = () => {
    return (
        <div className="go_content">
            <ContentTop titleName={"커뮤니티 > 게시판"} path={"/freeboard"} />
            <div className={styles.freeboardpage_container}>
                <div className={styles.contents_container}>
                    <TabContent category={category} />
                </div>
                <div className={styles.sidebar_container}>
                    <SideBar>
                        <BasicButton
                            text="글쓰기"
                            path="/freeboard/editfreeboard"
                        />
                        <div className={styles.sidebar_header}>공지 사항</div>
                        {importantContents.map((contentbox, index) => {
                            return (
                                <Link
                                    to={`/detailfreeboardpage/${contentbox.id}`}
                                >
                                    <div
                                        key={index}
                                        className={styles.sidebar_contents}
                                    >
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
