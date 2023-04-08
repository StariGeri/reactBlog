import React from "react";
import "./componentStyles/Button.css";

interface buttonProps {
  text: string;
  isFilled?: boolean;
  isOutlined?: boolean;
  isReverse?: boolean;
  isDelete?: boolean;
  isAddNew?: boolean;
  type?: string;
  onPress?: () => void;
}

const Button: React.FC<buttonProps> = ({
  text,
  isFilled,
  isOutlined,
  isReverse,
  isDelete,
  isAddNew,
  onPress
}) => {
  const className = [
    "basic",
    isFilled ? "filled" : "",
    isOutlined ? "outlined" : "",
    isReverse ? "reverse" : "",
    isDelete ? "delete" : "",
    isAddNew ? "addNew" : "",
  ].join(" ");

  return <button className={className} onClick={onPress}>{text}</button>;
};

export default Button;
