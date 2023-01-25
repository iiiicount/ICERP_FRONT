import ContentTop from "../components/ContentTop";

const NoticePage = () => {
    return (
        <div className="go_content">
            <ContentTop titleName={"공지"} path={"/notice"} />
            <div className="content_page">공지사항 내용물</div>
        </div>
    );
};

export default NoticePage;
