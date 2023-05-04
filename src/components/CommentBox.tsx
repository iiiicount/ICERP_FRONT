import style from "../assets/scss/CommentBox.module.scss";

const CommentBox = (props: any) => {
  return (
    <div className={style.comment_box}>
      <div>{props.comment}</div>
    </div>
  );
};

export default CommentBox;
