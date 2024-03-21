import { BlockWrapper } from "../../../../components/BlockWrapper/BlockWrapper";

import playIcon from "../../../../assets/playIcon.png";

import "./Video.css";
import { CSSProperties, useState } from "react";
import { Popup } from "./Popup/Popup";
import { VIDEO_URL } from "../../../../constants/constants";

const style: CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  textAlign: "center",
  maxWidth: "750px",
};

export const Video = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="video-block">
      {isPopupOpen && <Popup videoUrl={VIDEO_URL} onClose={closePopup} />}
      <BlockWrapper style={style}>
        <img src={playIcon} alt="playIcon" onClick={openPopup} />
        <p className="video-headers">
          Watch the best Technology in <b>Action</b>
        </p>
        <p className="video-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          labore, consequatur dolorem, enim eos nostrum dignissimos repellendus
          corporis praesentium, impedit laboriosam minus nihil est quis expedita
          nobis repellat excepturi ab?
        </p>
      </BlockWrapper>
      ;
    </div>
  );
};
