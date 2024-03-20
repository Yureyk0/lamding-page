import { BlockWrapper } from "../../../../components/BlockWrapper/BlockWrapper";

import "./Gallery.css";

export const Gallery = () => {
  return (
    <div>
      <BlockWrapper>
        <div className="gallery">
          <h2 className="gallery-headers">show the gallery</h2>
          <p className="gallery-subheaders">
            summarise what your product is all about
          </p>
          <div className="gallery-list">
            {Array.from(Array(4)).map((_icon, index) => (
              <div className="gallery-item">
                <div className="gallery-image">
                  <div className="gallery-image-subtitle">
                    SCREEN SHOT #{index + 1}
                  </div>
                </div>
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
