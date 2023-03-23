import styles from "../assets/scss/ContentBox.module.scss";
import { CgProfile } from "react-icons/cg";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";

interface contentBox {
    id?: string;
    writer?: string;
    writerImg?: string;
    title?: string;
    contents?: string;
    createdDate?: string;
    commentCnt?: number;
}

const ContentBox = ({
    id,
    writer,
    writerImg,
    title,
    contents,
    createdDate,
    commentCnt,
}: contentBox) => {
    return (
        <div className={styles.contentbox_container}>
            <div className={styles.title_box}>
                <Link to={`/detailfreeboardpage/${id}`}>
                    <span>{title}</span>
                    <span>
                        <HiOutlineChatBubbleOvalLeftEllipsis
                            className={
                                styles.HiOutlineChatBubbleOvalLeftEllipsis
                            }
                        />
                    </span>
                    <span className={styles.comment_cnt}>{commentCnt}</span>
                </Link>
            </div>
            <div className={styles.contents_box}>
                <Link to={`/detailfreeboardpage/${id}`}>{contents}</Link>
            </div>
            <div className={styles.writer_box}>
                <span>
                    {writerImg ? (
                        <img src={writerImg}></img>
                    ) : (
                        <CgProfile className={styles.CgProfile} />
                    )}
                </span>
                <span>{writer}</span>
                <span>{createdDate}</span>
            </div>
        </div>
    );
};

export default ContentBox;
