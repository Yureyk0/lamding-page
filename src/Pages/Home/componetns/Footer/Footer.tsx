import { CSSProperties } from "react";
import { BlockWrapper } from "../../../../components/BlockWrapper/BlockWrapper";

import "./Footer.css";
const style: CSSProperties | undefined = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export const Footer = () => {
  return (
    <div className="footer">
      <BlockWrapper style={style}>
        <p>Copyright © 2013 | bazinger | All Rights Reserved</p>
        <p>Terms of Service | Privacy Policy</p>
      </BlockWrapper>
    </div>
  );
};
