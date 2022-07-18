import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section className="container">
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          id="search"
          // value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {data
          .filter((value) => {
            if (
              value.first_name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, i) => {
            return (
              <div key={i}>
                <p>{`${value.first_name} ${value.last_name}`}</p>
              </div>
            );
          })}
      </form>
    </section>
  );
}

export default App;
