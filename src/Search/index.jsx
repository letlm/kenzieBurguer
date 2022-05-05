import "./Search.css";
import { useState } from "react";
import ButtonComp from "../components/Button";

const Search = ({ setSearch }) => {
  const [valueSearch, setValueSearch] = useState("");

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          value={valueSearch}
          onChange={(event) => setValueSearch(event.target.value)}
        />
        <ButtonComp
          type="submit"
          className="search"
          onClick={() => {
            setSearch(valueSearch, setValueSearch(""));
          }}
        >
          Pesquisar
        </ButtonComp>
      </form>
    </>
  );
};

export default Search;
