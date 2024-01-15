import { IconContext } from "react-icons";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const iconMappings = {
  info: <FaInfoCircle />,
  warning: <FaExclamationTriangle />,
  success: <FaCheckCircle />,
};

export default function Alert({ color, fontColor, icon, message }) {
  const alertStyle = {
    backgroundColor: color,
    color: fontColor,
    padding: "16px",
    display: "flex",
    justify: "left",
    alignItems: "center",
    width: "100%",
  };

  const iconComponent = icon ? iconMappings[icon] : null;

  return (
    <div style={alertStyle}>
      <IconContext.Provider value={{ size: "1.5em" }}>
        {iconComponent}
      </IconContext.Provider>
      <p style={{ marginLeft: "8px" }}>{message}</p>
    </div>
  );
}
