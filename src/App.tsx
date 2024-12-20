import { useState, useEffect, Suspense } from "react";
import "./styles/global.scss";
import { Header } from "./components";
import { WeatherProvider } from "./context";

import { Home } from "./pages";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <WeatherProvider>
      {isLoading && <p>Loading</p>}
      <div className="app-container">
        <Header />
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
