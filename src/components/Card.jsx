export default function Card({ href, imgAlt, imgSrc, children }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '16px',
    maxWidth: '300px',
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 16px"
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <a href={href}>
      <div style={cardStyle}>
        <img src={imgSrc} alt={imgAlt} style={imageStyle} />
        <div style={{ padding: '16px' }}>
          {children}
        </div>
      </div>
    </a>
  );
}