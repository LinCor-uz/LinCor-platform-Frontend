import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Course from "./pages/Course";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/course" element={<Course />} />
      <Route path="/buy" element={<Payment />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
