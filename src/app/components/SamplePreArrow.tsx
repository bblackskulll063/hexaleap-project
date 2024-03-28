import React from "react";
import { FaChevronLeft } from "react-icons/fa";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?(): void;
}

const SamplePreArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        left: "-14vh",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #2C9CF0",
        padding: "25px 20px",
      }}
      onClick={onClick}
    >
      <FaChevronLeft style={{ fontSize: "30px" }} />&
    </div>
  );
};

export default SamplePreArrow;
