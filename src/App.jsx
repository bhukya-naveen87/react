import React from "react";
import { Routes, Route } from "react-router-dom";
import UseActionStateMain from "./components/useActionStateDemo/UseActionStateMain";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/useStateAction" element={<UseActionStateMain />} />
      </Routes>
    </div>
  );
};

export default App;
