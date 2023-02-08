import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState("");

  useEffect(() => {
    getSWAPIPeople();
  }, []);

  const getSWAPIPeople = async () => {
    try {
      let response = await fetch("https://swapi.dev/api/people/1/");
      if (response.status === 500) {
        setPeople("Oops… something went wrong, try again");
      }
      const result = await response.json();
        setPeople(result.name);
    } catch (error) {
      setPeople("Oops… something went wrong, try again");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SWAPI People</h1>
        <p>{people}</p>
      </header>
    </div>
  );
}

export default App;
