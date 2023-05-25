import styles from "../assets/scss/Login.module.scss";
import logo from "../assets/images/icount_logo_color.png";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login_box}>
        <img src={logo} className={styles.app_logo} alt="logo" />
        <div className={styles.login_form}>
          <input className={styles.input} type="text" placeholder="회사코드" />
          <input className={styles.input} type="text" placeholder="아이디" />
          <input className={styles.input} type="password" placeholder="비밀번호" />
        </div>
        <div className={styles.btn_login}>
          <a id="login_submit" href="#">
            로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
