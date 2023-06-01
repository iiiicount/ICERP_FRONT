import styles from "../assets/scss/Login.module.scss";
import logo from "../assets/images/icount_logo_color.png";
import { useState } from "react";

const LoginPage = () => {
  const [comcode, setComcode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeComcode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComcode(e.target.value);
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLoginButton = async () => {
    const loginData = new FormData();
    loginData.append("com_code", comcode);
    loginData.append("username", username);
    loginData.append("password", password);

    fetch("http://43.201.180.168:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "",
      },
      body: loginData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("결과: ", result);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_box}>
        <img src={logo} className={styles.app_logo} alt="logo" />
        <div className={styles.login_form}>
          <input
            className={styles.input}
            type="text"
            placeholder="회사코드"
            onChange={onChangeComcode}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="아이디"
            onChange={onChangeUsername}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
          />
        </div>
        <div className={styles.btn_login} onClick={onClickLoginButton}>
          <a id="login_submit" href="#">
            로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
