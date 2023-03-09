import { Link, NavLink } from "react-router-dom";
import "../assets/scss/NavBar.scss";
import logo from "../assets/images/icount_logo.png";

const navLists = [
  {
    path: "/",
    name: "home",
    kr_name: "홈",
  },
  {
    path: "/login",
    name: "login",
    kr_name: "로그인",
  },
  {
    path: "/notice",
    name: "notice",
    kr_name: "공지사항",
  },
  {
    path: "/sale",
    name: "sale",
    kr_name: "판매",
  },
  {
    path: "/purchase",
    name: "purchase",
    kr_name: "구매",
  },
  {
    path: "/freeboard",
    name: "freeboard",
    kr_name: "커뮤니티",
  },
];

const NavBar = () => {
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
                {navLists.map((navList) => {
                  return (
                    <li className="simplebar-li-item" key={navList.name}>
                      <NavLink to={navList.path}>
                        <span className="wrap_ic_gnb_adv">
                          <span className="ic_gnb_adv ic_home"></span>
                        </span>
                        <span className="menu menu-name">
                          {navList.kr_name}
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
