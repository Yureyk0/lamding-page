import ReactPlayer from "react-player";

import "./Popup.css";

interface PopupProps {
  videoUrl: string;
  onClose: () => void;
}

export const Popup = ({ videoUrl, onClose }: PopupProps) => {
  return (
    <div className="popup-container">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          &#10006;
        </button>
        <ReactPlayer url={videoUrl} controls={true} />
      </div>
    </div>
  );
};
