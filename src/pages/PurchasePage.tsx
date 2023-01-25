import ContentTop from "../components/ContentTop";

const PurchasePage = () => {
    return (
        <div className="go_content">
            <ContentTop titleName={"구매"} path={"/purchase"} />
            <div className="content_page">내용물</div>
        </div>
    );
};

export default PurchasePage;
