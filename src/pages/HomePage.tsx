import ContentTop from "../components/ContentTop";

const NoticePage = () => {
    return (
        <div className="go_content">
            <ContentTop titleName={"홈"} path={"/"} />
            <div className="content_page">홈 내용물</div>
        </div>
    );
};

export default NoticePage;
