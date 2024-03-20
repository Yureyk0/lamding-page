import { BlockWrapper } from "../../../../components/BlockWrapper/BlockWrapper";
import "./Header.css";
import Logo from "../../../../assets/Logo.png";

const navList: string[] = [
  "HOME",
  "Features",
  "Gallery",
  "Video",
  "PRICES",
  "Testimonials",
  "DOWNLOAD",
  "CONTACT",
];
// style to BlockWrapper TO DO
export const Header = () => {
  return (
    <header className="header">
      <BlockWrapper>
        <div className="header-block">
          <div className="logo-block">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar-block">
            {navList.map((navItem, index) => (
              <a
                href="#"
                className={
                  index === 1
                    ? "navbar-item-link active"
                    : "navbar-item-link no-active"
                }
              >
                {navItem}
              </a>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </header>
  );
};
