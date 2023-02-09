import "../assets/scss/ContentBox.scss";

interface contentBox {
  writer: string;
  title: string;
  contents: string;
}

const ContentBox = ({ writer, title, contents }: contentBox) => {
  return (
    <div className="contentbox_container">
      <div className="writer_box">{writer}</div>
      <div className="title_box">{title}</div>
      <div className="contents_box">{contents}</div>
    </div>
  );
};

export default ContentBox;
