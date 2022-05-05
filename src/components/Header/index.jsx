import "./Header.css";
import Search from "../../Search";
import BurguerKenzie from "../img/burguerKenzie.png";

const Header = ({ setSearch }) => {
  return (
    <header className="headerProducts">
      <nav>
        <img
          className="burguerKenzie"
          src={BurguerKenzie}
          alt="Burguer Kenzie"
        />
      </nav>
      <Search setSearch={setSearch} />
    </header>
  );
};

export default Header;
