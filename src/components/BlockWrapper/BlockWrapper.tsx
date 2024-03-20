import { CSSProperties, ReactNode } from "react";
import "./BlockWrapper.css";

interface BlockWrapperProps {
  children: ReactNode;
  style?: CSSProperties | undefined;
}

export const BlockWrapper = ({ children, style = {} }: BlockWrapperProps) => {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};
