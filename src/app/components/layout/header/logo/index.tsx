import { getImagePath } from "@/lib/utils/imagePath";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img
        src={getImagePath("/images/logo/logo.svg")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
};

export default Logo;
