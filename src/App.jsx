import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {

  // get the default theme (dark or light) from localStorage or system preference
  // if no preference is set, default to dark
  function getDefaultTheme() {
    if (localStorage.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    if (localStorage.theme === "light" || window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "dark";
    }
    return "dark";
  }

  // 
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return (prevTheme === "dark" ? "light" : "dark")
    });
  }

  // Set the theme on the body element for tailwind theme setting
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <About />
      <Projects />
      <Contacts theme={theme}/>
    </div>
  );
}

export default App;
