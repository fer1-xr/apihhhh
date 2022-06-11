import { useEffect, useState } from "react";
import "./styles.css";
import Quote from "./components/Quote";
export default function App() {
  const [stoic, setStoic] = useState({
    author: null,
    quote: null
  });

  const fetchStoic = async () => {
    return await fetch("https://api.themotivate365.com/stoic-quote", {
      mode: "no-cors",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((quote) => console.log(quote));
  };

  const generate = async () => {
    setStoic(await fetchStoic());
  };
  useEffect(() => {
    (async function () {
      try {
        setStoic(await fetchStoic());
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Quote stoic={stoic} />
      <button onClick={generate}>click here</button>
    </div>
  );
}
