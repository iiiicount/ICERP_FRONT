const Footer = ({ data }: { data: { checked: boolean }[] }) => {
    const handleSave = () => {
        console.log("저장");

        const checkedData = data.filter(({ checked }) => checked);
        console.log("저장 체크 데이터 API 요청", checkedData);
    };

    const handleNew = () => {
        console.log("생성");
    };

    const handleDelete = () => {
        console.log("삭제");

        const checkedData = data.filter(({ checked }) => checked);
        console.log("삭제 체크 데이터 API 요청", checkedData);
    };

    return (
        <footer>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleNew}>신규</button>
            <button onClick={handleDelete}>삭제</button>
        </footer>
    );
};

export default Footer;
