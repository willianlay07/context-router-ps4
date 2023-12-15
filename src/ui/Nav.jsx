import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul
        style={{ listStyleType: "none", display: "flex", paddingLeft: "0px" }}
      >
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/log-in">Log In</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
