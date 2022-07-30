/* 
    Login
    Register
    History模式  --  BrowserRouter
    Hash模式     --  HashRouter
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
);

export default BaseRouter;
