import "./styles/global.scss";
import { Header } from "./layout";
import { Home } from "./pages";
// import { Button } from "./components";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      {/* <Button label="click here" /> */}
    </div>
  );
}

export default App;
