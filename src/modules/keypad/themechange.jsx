// import React, { useState, useEffect } from "react";
// // import "./themechange.css";

// function ThemeChange(themeValue) {
//   setTheme(themeValue);
//   const [selectedTheme, chngSelected] = useState("0");

//   useEffect(() => {
//     updateCss(`../css/theme${selectedTheme}.css`);
//   }, [selectedTheme]);

//   function chngTheme(themeValue) {
//     chngSelected(themeValue);
//   }

//   function updateCss(cssPath) {
//     const link = document.querySelector("#themeStylesheet");

//     if (link) {
//       link.setAttribute("href", cssPath);
//     } else {
//       const newLink = document.createElement("link");
//       newLink.setAttribute("rel", "stylesheet");
//       newLink.setAttribute("href", cssPath);
//       newLink.setAttribute("id", "themeStylesheet");
//       document.head.appendChild(newLink);
//     }
//   }
//   return (
//     <>
//       <h1>test</h1>
//       <div className="theme-switcher">
//         <h2>Theme Switcher</h2>
//         <div className="radio-buttons">
//           <label>
//             <input
//               type="radio"
//               value="0"
//               checked={selectedTheme === "0"}
//               onChange={() => chngTheme("0")}
//             />
//             Theme 1
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="1"
//               checked={selectedTheme === "1"}
//               onChange={() => chngTheme("1")}
//             />
//             Theme 2
//           </label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ThemeChange;
import React, { useState, useEffect } from "react";
import "./themechange.css";

function ThemeChange() {
  const [selectedTheme, setSelectedTheme] = useState("0");

  useEffect(() => {
    updateCss(
      selectedTheme === "0"
        ? "../../src/App.css"
        : `../../src/modules/css/theme${selectedTheme}.css`
    );
  }, [selectedTheme]);

  function chngTheme(themeValue) {
    setSelectedTheme(themeValue);
  }

  function updateCss(cssPath) {
    const link = document.querySelector("#themeStylesheet");

    if (link) {
      link.setAttribute("href", cssPath);
    } else {
      const newLink = document.createElement("link");
      newLink.setAttribute("rel", "stylesheet");
      newLink.setAttribute("href", cssPath);
      newLink.setAttribute("id", "themeStylesheet");
      document.head.appendChild(newLink);
    }
  }

  return (
    <div className="theme-switcher">
      <h2>Theme Switcher</h2>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="0"
            checked={selectedTheme === "0"}
            onChange={() => chngTheme("0")}
          />
          Theme 1
        </label>
        <label>
          <input
            type="radio"
            value="1"
            checked={selectedTheme === "2"}
            onChange={() => chngTheme("2")}
          />
          Theme 2
        </label>
      </div>
    </div>
  );
}

export default ThemeChange;
