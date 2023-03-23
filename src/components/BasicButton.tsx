import { Link } from "react-router-dom";
import styles from "../assets/scss/BasicButton.module.scss";

interface BasicButton {
  text: string;
  path: string;
}

const BasicButton = ({ text, path }: BasicButton) => {
  return (
    <Link to={path}>
      <div className={styles.button_container}>{text}</div>
    </Link>
  );
};

export default BasicButton;
