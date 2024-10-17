import "./styles/global.scss";
import { Header } from "./components";
import { WeatherProvider } from "./context";

import { Home } from "./pages";
// import { Button } from "./components";

function App() {
  return (
    <WeatherProvider>
      <div className="app-container">
        <Header />
        <Home />
        {/* <Button label="click here" /> */}
      </div>
    </WeatherProvider>
  );
}

export default App;
