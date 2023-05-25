import style from "../assets/scss/Company.module.scss";
import { ContentTop, EditInfo } from "../components";

const basicProductInfoData = {
    // 필수값
    code: "T_00123", // 상품코드
    name: "테스트상품00123", // 상품명

    // optional
    status: "N", // 상태 => 기본값 Y
    taxation: "N", // 과세유형 => 기본값 Y
    standard: "30cm", // 표준규격
    unit: "20EA", // 단위
    purchase_price: 100, // 구매가
    sell_price: 500, // 판매가
    memo: "테스트용 상품이라서 사용중아닌걸로 등록했어요~", // 메모
};

const baseProductInfo = [
    {
        display_name: "상품코드",
        data: basicProductInfoData.code,
        editable: false,
    },
    {
        display_name: "상품명",
        data: basicProductInfoData.name,
        editable: false,
    },
    {
        display_name: "상태",
        data: basicProductInfoData.status,
        editable: true,
    },
    {
        display_name: "과세유형",
        data: basicProductInfoData.taxation,
        editable: true,
    },
    {
        display_name: "표준규격",
        data: basicProductInfoData.standard,
        editable: true,
    },
    { display_name: "단위", data: basicProductInfoData.unit, editable: true },
    {
        display_name: "구매단가",
        data: basicProductInfoData.purchase_price,
        editable: true,
    },
    {
        display_name: "판매가",
        data: basicProductInfoData.sell_price,
        editable: true,
    },
    { display_name: "메모", data: basicProductInfoData.memo, editable: true },
];

const BaseProduct = () => {
    const onClickSave = () => {
        console.log("저장");
    };

    const onClickCansel = () => {
        console.log("취소");
    };

    return (
        <>
            <div className="go_content">
                <ContentTop titleName={"기초등록"} path={"/"} />
            </div>
            <div className={style.contents}>
                <div className={style.content_box}>
                    <EditInfo info={baseProductInfo} />
                </div>
            </div>
            <div className={style.footer}>
                <button className={style.btn_major} onClick={onClickSave}>
                    저장
                </button>
                <button className={style.btn_minor} onClick={onClickCansel}>
                    취소
                </button>
            </div>
        </>
    );
};

export default BaseProduct;
