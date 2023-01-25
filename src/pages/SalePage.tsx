import ContentTop from "../components/ContentTop";

const SalePage = () => {
    return (
        <div className="go_content">
            <ContentTop titleName={"판매"} path={"/sale"} />
            <div className="content_page">판매 내용물</div>
        </div>
    );
};

export default SalePage;
