import { ReactNode } from "react";

interface Props {
  children: string;
  type?: "primary";
  onClick: () => void;
}

const Button = ({ type = "primary", children, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
