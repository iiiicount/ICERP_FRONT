import { useState } from "react";
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
        submenu: [],
    },
    {
        path: "/freeboard",
        name: "freeboard",
        kr_name: "자유게시판",
        icon: <AiOutlineComment size={"25px"} />,
        navType: "gnb",
        submenu: [],
    },
    {
        path: "/contact",
        name: "contact",
        kr_name: "주소록",
        icon: <MdOutlinePersonOutline size={"25px"} />,
        navType: "gnb",
        submenu: [],
    },
    {
        path: "/sale",
        name: "sale",
        kr_name: "판매",
        icon: <MdOutlinePointOfSale size={"25px"} />,
        navType: "gnb",
        submenu: [
            {
                path: "/sale/register",
                name: "saleRegister",
                kr_name: "판매등록",
                icon: <AiOutlineRight size={"18px"} />,
                navType: "lnb", // Local Navigation Bar
            },
            {
                path: "/sale/inquire",
                name: "saleInquire",
                kr_name: "판매조회",
                icon: <AiOutlineRight size={"18px"} />,
                navType: "lnb", // Local Navigation Bar
            },
        ],
    },
    {
        path: "/purchase",
        name: "purchase",
        kr_name: "구매",
        icon: <AiOutlineTag size={"25px"} />,
        navType: "gnb",
        submenu: [],
    },
    {
        path: "/base",
        name: "base",
        kr_name: "기초등록",
        icon: <AiOutlineDatabase size={"25px"} />,
        navType: "gnb",

        submenu: [
            {
                path: "/base/product",
                name: "baseProduct",
                kr_name: "품목등록",
                icon: <AiOutlineRight size={"18px"} />,
                navType: "lnb", // Local Navigation Bar
            },
            {
                path: "/base/custom",
                name: "baseCustom",
                kr_name: "고객등록",
                icon: <AiOutlineRight size={"18px"} />,
                navType: "lnb", // Local Navigation Bar
            },
        ],
    },

    {
        path: "/company",
        name: "company",
        kr_name: "회사관리",
        icon: <HiOutlineBuildingOffice2 size={"25px"} />,
        navType: "gnb",
        submenu: [],
    },
];

const AccordionMenuISubtem = ({ subMenuItems, isOpen }: any) => {
    return (
        <ul className={isOpen ? "show-menu" : "hide-menu"}>
            {subMenuItems.map((subItem: any) => {
                return (
                    <li key={subItem.name}>
                        <NavLink to={subItem.path}>{subItem.kr_name}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

const AccordionMenuItem = ({ navItem }: any) => {
    const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu((isOpen) => !isOpen); // on,off 개념 boolean
    };

    return (
        <li
            className="sub-menu"
            key={navItem.name}
            onClick={() => toggleMenu()}
        >
            <NavLink to={navItem.path}>
                <div className="menu-icon-group">
                    <i className="menu-icon">{navItem.icon}</i>
                    <span className="">{navItem.kr_name}</span>
                </div>
                <i className="pull-right">
                    <AiOutlineRight></AiOutlineRight>
                </i>
            </NavLink>
            <AccordionMenuISubtem
                subMenuItems={navItem.submenu}
                isOpen={isOpen}
            />
        </li>
    );
};

const NavBar = () => {
    return (
        <aside className="sidebar">
            <h1 className="nav_logo" id="advanced_logo">
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
            </h1>

            <div id="leftside-navigation" className="nano">
                <ul className="nano-content">
                    {navList.map((navItem) => {
                        return (
                            <AccordionMenuItem
                                navItem={navItem}
                                //key={navItem.name}
                            />
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default NavBar;
