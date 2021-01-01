import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<div>404 Error</div>}/>
      </Routes>
    </Router>
  );
}
