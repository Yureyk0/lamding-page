import ReactPlayer from "react-player";

import "./Popup.css";
import { useScreenSize } from "../../../../../hooks/useScreenSize";

interface PopupProps {
  videoUrl: string;
  onClose: () => void;
}

export const Popup = ({ videoUrl, onClose }: PopupProps) => {
  const { width } = useScreenSize();

  const isModile = width < 500;
  console.log(isModile);

  return (
    <div className="popup-container">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          &#10006;
        </button>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width={isModile ? 333 : 640}
          height={isModile ? 200 : 360}
        />
      </div>
    </div>
  );
};
