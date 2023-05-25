import { Link, NavLink } from "react-router-dom";
import "../assets/scss/NavBar.scss";
import logo from "../assets/images/icount_logo.png";
import {
    AiOutlineHome,
    AiOutlineComment,
    AiOutlineTag,
    AiOutlineDatabase,
    AiOutlineRight,
} from "react-icons/ai";
import { MdOutlinePersonOutline, MdOutlinePointOfSale } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const navList = [
    {
        path: "/",
        name: "home",
        kr_name: "홈",
        icon: <AiOutlineHome size={"25px"} />,
        navType: "gnb", //Global Navigation Bar
    },
    {
        path: "/freeboard",
        name: "freeboard",
        kr_name: "자유게시판",
        icon: <AiOutlineComment size={"25px"} />,
        navType: "gnb",
    },
    {
        path: "/contact",
        name: "contact",
        kr_name: "주소록",
        icon: <MdOutlinePersonOutline size={"25px"} />,
        navType: "gnb",
    },
    {
        path: "/sale",
        name: "sale",
        kr_name: "판매",
        icon: <MdOutlinePointOfSale size={"25px"} />,
        navType: "gnb",
    },
    {
        path: "/purchase",
        name: "purchase",
        kr_name: "구매",
        icon: <AiOutlineTag size={"25px"} />,
        navType: "gnb",
    },
    {
        path: "/base",
        name: "/base",
        kr_name: "기초등록",
        icon: <AiOutlineDatabase size={"25px"} />,
        navType: "gnb",
    },
    {
        path: "/base/product",
        name: "base/product",
        kr_name: "품목등록",
        icon: <AiOutlineRight size={"18px"} />,
        navType: "lnb", // Local Navigation Bar
    },
    {
        path: "/company",
        name: "company",
        kr_name: "회사관리",
        icon: <HiOutlineBuildingOffice2 size={"25px"} />,
        navType: "gnb",
    },
];

const NavBar = () => {
    const navGnbStyle = {
        fontSize: "20px",
    };

    const navLnbStyle = {
        fontSize: "16px",
    };

    return (
        <header className="nav_header">
            <span className="wrap_btn_list">
                <div className="btn_list">
                    <span className="wrap_ic_gnb_adv">
                        <span className="ic_gnb_adv menu"></span>
                    </span>
                </div>
            </span>

            <h1 className="nav_logo" id="advanced_logo">
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
            </h1>

            <nav id="menu-container">
                <ul>
                    <div className="simplebar-wrapper">
                        <div className="simplebar-content-wrapper">
                            <div className="simplebar-content">
                                {navList.map((nav) => {
                                    return (
                                        <li
                                            className="simplebar-li-item"
                                            key={nav.name}
                                            style={
                                                nav.navType === "gnb"
                                                    ? navGnbStyle
                                                    : navLnbStyle
                                            }
                                        >
                                            <NavLink to={nav.path}>
                                                <span className="wrap_ic_gnb_adv">
                                                    {nav.icon}
                                                </span>
                                                <span className="menu menu-name">
                                                    {nav.kr_name}
                                                </span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
