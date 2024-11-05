import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to={"/"}>
          <h1>Sports Data Central</h1>
        </Link>
          <ul className="nav">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/NHL"}>NHL Standings</Link>
            </li>
            <li>
              <Link to={"/NHL-news"}>NHL News</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Header;