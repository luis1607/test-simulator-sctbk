import "./App.css";
import { SimulatorProvider } from "./contexts/SimulatorProvider";
import SimulatorPage from "./pages/simulator-page/SimulatorPage";
function App() {
  return (
    <div className="App">
      <SimulatorProvider>
        <SimulatorPage />
      </SimulatorProvider>
    </div>
  );
}

export default App;
