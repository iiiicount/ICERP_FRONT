import "../assets/scss/ContentTop.scss";
import { Link } from "react-router-dom";

const ContentTop = ({ titleName, path }: any) => {
    return (
        <header className="content_top">
            <div className="top_title">
                <Link to={path}>
                    <span className="txt">{titleName}</span>
                </Link>
            </div>
        </header>
    );
};

export default ContentTop;
