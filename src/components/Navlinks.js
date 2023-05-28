import { NavLink } from "react-router-dom";
import links from "../utils/links";

const Navlinks = ({ toggleSideBar }) => {
  return (
    <div className="nav-links">
      {links.map(({ id, text, path, icon }) => {
        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={id}
            onClick={toggleSideBar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Navlinks;
