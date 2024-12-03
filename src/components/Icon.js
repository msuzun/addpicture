import { FaThumbsUp } from "react-icons/fa";
import '../style/Icon.css';
const Icon = ({ style }) => {
  return (
    <div className="icon" style={{ ...style }}>
      <FaThumbsUp />
    </div>
  );
};
export default Icon;
