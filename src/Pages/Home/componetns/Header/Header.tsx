import { BlockWrapper } from "../../../../components/BlockWrapper/BlockWrapper";
import "./Header.css";
import Logo from "../../../../assets/Logo.png";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { Sidebar } from "./Sidebar/Sidebar";

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
  const { width } = useScreenSize();

  const isBurger = width < 1000;

  return (
    <header className="header">
      <BlockWrapper>
        <div className="header-block" id="outer-container">
          {isBurger && <Sidebar navList={navList} />}
          <div className="logo-block">
            <img src={Logo} alt="logo" />
          </div>
          {!isBurger && (
            <div className="navbar-block">
              {navList.map((navItem, index) => (
                <a
                  href="#"
                  className={
                    index === 0
                      ? "navbar-item-link active"
                      : "navbar-item-link no-active"
                  }
                >
                  {navItem}
                </a>
              ))}
            </div>
          )}
        </div>
      </BlockWrapper>
    </header>
  );
};
