import { BlockWrapper } from "../../../../components/BlockWrapper/BlockWrapper";

import layoutIcon from "../../../../assets/layoutIcon.png";
import phoneIcon from "../../../../assets/phoneIcon.png";
import chatIcon from "../../../../assets/chatIcon.png";
import messageIcon from "../../../../assets/messageIcon.png";

import "./Features.css";

const iconsList = [layoutIcon, phoneIcon, chatIcon, messageIcon];

export const Features = () => {
  return (
    <div className="features-wrapper">
      <BlockWrapper>
        <div className="features">
          <h2 className="features-headers">summarise the features</h2>
          <p className="features-subheaders">
            summarise what your product is all about
          </p>
          <div className="features-list">
            {iconsList.map((icon) => (
              <div className="features-item" key={icon}>
                <div className="features-circle">
                  <img src={icon} alt={icon} />
                </div>
                <p className="item-headers">Lorem ipsum</p>
                <p className="item-desc">
                  Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                  pulvinar massa idporta nequetiam elerisque mi id faucibus
                  iaculis vitae pulvinar.
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
};
