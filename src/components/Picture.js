import Icon from "./Icon";

const Picture = ({ imageUrl }) => {
  return (
    <div className="picture" style={{ position: "relative", display: "inline-block" }}>
      <img src={imageUrl} style={{ display: "block" }} />
      <Icon style={{ position: "absolute", bottom: 0, right: 0 }} />
    </div>
  );
};
export default Picture;
