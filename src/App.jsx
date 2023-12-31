import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
    return;
  };
  const createDitigs = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className={"grid" + [i]}
          id={"grid" + [i]}
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          <p>{i}</p>
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const reset = () => {
    if (calc == "") {
      return;
    }
    const resetCalc = "";
    setCalc(resetCalc);
    setResult(resetCalc);
  };
  /* if calc = empty return else slice from first digit (0) (slice removes 1 since spesified -1) and setCalc becomes the new value*/
  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <>
      <div id="app">
        <div id="calculator">
          <div id="display">
            {result ? <span>({result})</span> : ""}&nbsp;
            {calc || "0"}
          </div>
          <div className="grid-container">
            <div className="buttons">
              {/* sets up the divide, multible, pluss and minus button and updates the calc with the correct operator */}
              <button className="divide" onClick={() => updateCalc("/")}>
                <p>/</p>
              </button>
              <button className="multiply" onClick={() => updateCalc("*")}>
                <p>x</p>
              </button>
              <button className="pluss" onClick={() => updateCalc("+")}>
                <p>+</p>
              </button>
              <button className="minus" onClick={() => updateCalc("-")}>
                <p>-</p>
              </button>
              {/* sets up the DEL key to remove last number */}
              <button className="del" onClick={deleteLast}>
                <p>DEL</p>
              </button>
              <button className="zero" onClick={() => updateCalc("0")}>
                <p>0</p>
              </button>
              <button className="dot" onClick={() => updateCalc(".")}>
                <p>.</p>
              </button>

              {createDitigs()}
              {/* sets up the 0 and . buttons */}

              {/* sets up the = button with a onclick to the calculate function */}
              <button className="reset" onClick={reset}>
                <p>RESET</p>
              </button>
              <button className="equal" onClick={calculate}>
                <p>=</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
