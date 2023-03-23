import styles from "../assets/scss/SideBar.module.scss";

const SideBar = ({ children }: any) => {
  return <div className={styles.sidebar_box}>{children}</div>;
};

export default SideBar;
