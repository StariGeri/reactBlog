import React from "react";
import "./Button.css";

interface buttonProps {
  text: string;
  isFilled?: boolean;
  isOutlined?: boolean;
  isReverse?: boolean;
}

const Button: React.FC<buttonProps> = ({
  text,
  isFilled,
  isOutlined,
  isReverse,
}) => {
  const className = [
    "basic",
    isFilled ? "filled" : "",
    isOutlined ? "outlined" : "",
    isReverse ? "reverse" : "",
  ].join(" ");
  return <button className={className}>{text}</button>;
};

export default Button;
