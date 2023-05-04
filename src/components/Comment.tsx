import { useState } from "react";
import styles from "../assets/scss/Comment.module.scss";
import CommentBox from "./CommentBox";

const Comment = () => {
  let [input, setInput] = useState("");
  let [comment, setCommnet] = useState(["ggg"]);

  function postEnter(e: any) {
    if (e.code === "Enter" && input.length > 0) {
      let enterCopy = [...comment];
      enterCopy.unshift(input);
      setCommnet(enterCopy);
      setInput("");
    }
  }
  function postClick() {
    if (input.length > 0) {
      let clickCopy = [...comment];
      clickCopy.push(input);
      setCommnet(clickCopy);
      setInput("");
    }
  }

  return (
    <div>
      <div className={styles.comment_container}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            postEnter(e);
          }}
        />
        <div className={styles.save_button} onClick={postClick}>
          저장
        </div>
      </div>

      {comment.map((value, index) => {
        return <CommentBox key={value + index} comment={comment[index]} />;
      })}
    </div>
  );
};

export default Comment;
