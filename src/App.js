import "./styles.css";
import { countries } from "./countries.js";
import { useState, useEffect } from "react";
export default function App(props) {
  const [inputTxt, handleChange] = useState("");
  const [filteredCountries, handleCountry] = useState([]);
  //console.log(regex);
  useEffect(() => {
    let regex = new RegExp("^" + inputTxt + ".*", "g");
    if (inputTxt === "") {
      handleCountry(countries);
    } else {
      // console.log(regex)
      const updatedCoun = countries.filter((item) => {
        if (regex.test(item)) {
          return true;
        } else {
          return false;
        }
      });
      console.log(updatedCoun);
      handleCountry(updatedCoun);
    }

    // console.log(inputTxt);
    // console.log(filteredCountries);
  }, [inputTxt]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          value={inputTxt}
        />
        <div>{inputTxt}</div>
        {filteredCountries.map((item) => (
          <li key={item.toString()}>{item}</li>
        ))}
      </div>
    </div>
  );
}
