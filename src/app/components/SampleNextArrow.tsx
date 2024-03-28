import React from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?(): void;
}

const SampleNextArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        right: "-14vh",
        border: "1px solid #2C9CF0",
        padding: "25px 20px",
      }}
      onClick={onClick}
    ></div>
  );
};

export default SampleNextArrow;
