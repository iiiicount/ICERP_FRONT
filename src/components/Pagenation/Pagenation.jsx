import styles from "../../assets/scss/Pagenation.module.scss";

const Pagenation = ({ currentPage, numberOfPages, onClick }) => {
    const numberOfPageForSet = numberOfPages;
    const startPage = 1; //페이지네이션 맨 앞에 있는 숫자
    return (
        <nav className={styles.pagenation}>
            <ul className={styles.pagenation_wrapper}>
                <li>
                    <div className={styles.paginate_button}>이전</div>
                </li>
                {Array(numberOfPageForSet)
                    .fill(startPage)
                    .map((value, index) => value + index)
                    .map((pageNumber) => {
                        return (
                            <li
                                key={pageNumber}
                                className={`${
                                    currentPage === pageNumber
                                        ? styles.paginate_active
                                        : ""
                                }`}
                            >
                                <div onClick={() => onClick(pageNumber)}>
                                    {pageNumber}
                                </div>
                            </li>
                        );
                    })}
                <li>
                    <div className={styles.paginate_button}>다음</div>
                </li>
            </ul>
        </nav>
    );
};

export default Pagenation;
