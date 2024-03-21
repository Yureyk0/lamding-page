import { BlockWrapper } from "../../../../../../components/BlockWrapper/BlockWrapper";
import { CustomButton } from "../CustomButton/CustomButton";

import iosIcon from "../../../../../../assets/iosIcon.png";
import androidIcon from "../../../../../../assets/androidIcon.png";

import "./Slide.css";
import { BUTTONS_LIST } from "../../../../../../constants/constants";

const platformsList = [
  {
    title: "ios",
    image: iosIcon,
  },
  {
    title: "android",
    image: androidIcon,
  },
];
export const Slide = () => {
  return (
    <div className="slide-background">
      <BlockWrapper>
        <div className="slide-container">
          <div className="slide-block">
            <h1 className="slide-headers">
              Simple, Beautiful <b>and Amazing</b>
            </h1>
            <p className="slide-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              repellendus aspernatur illo unde maxime vero similique repellat
              optio accusantium? Soluta labore sunt sapiente nihil in natus
              corrupti voluptatibus deserunt minus.
            </p>
            <div className="buttons-block">
              {BUTTONS_LIST.map(({ title, active }) => (
                <CustomButton title={title} active={active} key={title} />
              ))}
            </div>
            <div className="platforms-block">
              Aavailable on :
              {platformsList.map(({ title, image }) => (
                <div key={title} className="icon-block">
                  <img src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
};
