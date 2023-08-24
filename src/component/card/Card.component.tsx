import "./Card.style.scss";

interface Props {
  children: any;
  size?: string;
  color: string;
  hover?: boolean;
}

function Card({ children, size, color, hover = false, ...otherProps }: Props) {
  return (
    <div
      className={`card ${hover ? "hover-card" : ""}  ${size ? size : ""} 
      ${color ? "main-color" : color + "-color"} }`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Card;
