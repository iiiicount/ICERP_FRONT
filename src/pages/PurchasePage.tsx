import ContentTop from "../components/ContentTop";
import Board from "../components/Board/Board";

const PurchasePage = () => {
    return (
        <div className="go_content">
            <ContentTop titleName={"구매"} path={"/purchase"} />
            <div className="content_page">
                <Board />
            </div>
        </div>
    );
};

export default PurchasePage;
