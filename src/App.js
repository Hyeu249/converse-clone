import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import OpenStore from "./Components/OpenStore/OpenStore";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/vn" element={<OpenStore />} />
      </Routes>
    </Fragment>
  );
}

export default App;
