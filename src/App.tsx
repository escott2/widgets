import "./styles/global.scss";
import { Header } from "./components";
import { WeatherProvider } from "./context";

import { Home } from "./pages";

function App() {
  return (
    <WeatherProvider>
      <div className="app-container">
        <Header />
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
