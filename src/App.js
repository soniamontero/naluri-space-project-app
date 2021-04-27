import "./styles/app.scss";
import { getPi } from "./services/pi";
import React, { useEffect, useState } from "react";

const App = () => {
  const [pi, setPi] = useState("Data is loading...");

  const piValue = async () => {
    const piResult = await getPi();
    if (piResult && piResult.data) setPi(piResult.data)
  }

  useEffect(() => {
    piValue();
  }, [])

  return (
    <div className="app">
      {pi}
    </div>
  );
}

export default App;
