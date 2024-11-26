import { useState, useEffect, Suspense } from "react";
import "./styles/global.scss";
import { Header } from "./components";
import { WeatherProvider } from "./context";

import { Home } from "./pages";

function App() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    });
    setIsLoading(false);
  }, []);

  return (
    <WeatherProvider>
      {isLoading && <p>Loading</p>}
      <div className="app-container">
        <Header hasScrolledDown={hasScrolledDown} />
        <Home hasScrolledDown={hasScrolledDown} />
      </div>
    </WeatherProvider>
  );
}

export default App;
