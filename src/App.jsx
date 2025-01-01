import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Course from "./pages/Course";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/course" element={<Course />} />
    </Routes>
  );
}

export default App;
