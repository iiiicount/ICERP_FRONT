import "../assets/scss/MyInfo.scss";
import { Link } from "react-router-dom";
import Photo from "../assets/images/photo_profile_small.jpg";

const MyInfo = () => {
    return (
        <section className="my_info snb">
            <div className="profile">
                <span className="photo">
                    <Link to="/login">
                        <img id="sessionThumbnail" src={Photo} />
                    </Link>
                </span>
                <div className="notification">
                    <div className="wrap_notification">
                        <Link to="/noti/all" className="btn_noti">
                            <span id="noti-count-badge"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyInfo;
