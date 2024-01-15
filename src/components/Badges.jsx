import { IconContext } from 'react-icons';
import { FaStar, FaHeart, FaCamera, FaAddressCard } from 'react-icons/fa';

export default function Badge({ color, fontColor, size, icon, title, borderRadius }) {
  const fontSize = size === "small" ? "12px" : "16px";

  const iconMappings = {
    star: <FaStar />,
    heart: <FaHeart />,
    cam: <FaCamera />,
    adress: <FaAddressCard />,
  };

  const IconComponent = iconMappings[icon] || null;

  return (
    <div style={{
      backgroundColor: color,
      color: fontColor,
      fontSize,
      padding: "0px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      borderRadius,
    }}>
      {IconComponent && (
        <IconContext.Provider value={{ size: '1.0em' }}>
          {IconComponent}
        </IconContext.Provider>
      )}
      {title && <span style={{ margin: 4 }}>{title}</span>}
    </div>
  );
}

// Från David - med separat css-fil
//  export default function Badge({title, color}) {
//    return (
//     <div className={color}>{title}</div>
// )
// }
