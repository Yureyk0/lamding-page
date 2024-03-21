import { slide as Menu } from "react-burger-menu";

export const Sidebar = ({ navList }: { navList: string[] }) => {
  return (
    <Menu>
      {navList.map((navItem) => (
        <a className="menu-item" key={navItem + "mobile"}>
          {navItem}
        </a>
      ))}
    </Menu>
  );
};
