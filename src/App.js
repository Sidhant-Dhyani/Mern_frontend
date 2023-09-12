
import Form from "./components/Form";
import Data from "./components/Data";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element= {<Data />}/>
      </Routes>
    </div>
  );
}

export default App;