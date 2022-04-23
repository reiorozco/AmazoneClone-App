import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          {/*<Route path="checkout" element={<Home />} />*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
