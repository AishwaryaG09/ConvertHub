import "./App.css";
import { useEffect } from "react";
import Router from "./navigation/Router";
function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <div className="app">
        <Router />
      </div>
    </>
  );
}

export default App;
