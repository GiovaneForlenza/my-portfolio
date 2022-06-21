import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import "./style/global.scss";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
