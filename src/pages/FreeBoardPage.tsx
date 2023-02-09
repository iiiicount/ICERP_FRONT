import ContentBox from "../components/ContentBox";
import ContentTop from "../components/ContentTop";

const contentBoxList = [
  {
    writer: "하하",
    title: "안녕하세요",
    contents: "반갑습니다 저는 하하 입니다",
  },
  {
    writer: "재석",
    title: "이게 맞나요?",
    contents: "반갑습니다 저는 재석 입니다",
  },
  {
    writer: "미주",
    title: "너무 피곤해요",
    contents: "반갑습니다 저는 미주 입니다",
  },
  {
    writer: "준서",
    title: "맞겠지?",
    contents: "반갑습니다 저는 준서 입니다",
  },
];

const FreeBoardPage = () => {
  return (
    <div className="go_content">
      <ContentTop titleName={"자유 게시판"} path={"/"} />
      <div>
        {contentBoxList.map((contentbox, index) => {
          return (
            <ContentBox
              key={index}
              writer={contentbox.writer}
              title={contentbox.title}
              contents={contentbox.contents}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FreeBoardPage;
