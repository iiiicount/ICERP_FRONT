import "../assets/scss/login.scss";
import logo from "../assets/images/icount_logo_color.png";

const LoginPage = () => {
    return (
        <div className="login">
            <div className="login_box">
                <img src={logo} className="app_logo" alt="logo" />
                <div className="login_form">
                    <input
                        className="input"
                        type="text"
                        placeholder="회사코드"
                    />
                    <input className="input" type="text" placeholder="아이디" />
                    <input
                        className="input"
                        type="password"
                        placeholder="비밀번호"
                    />
                </div>
                <div className="btn_login">
                    <a id="login_submit" href="#">
                        로그인
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
