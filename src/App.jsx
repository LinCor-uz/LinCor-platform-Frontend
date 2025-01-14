import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Course from "./pages/Course";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Coursereg from "./pages/Coursereg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/course" element={<Course />} />
      <Route path="/coursereg" element={<Coursereg />} />
      <Route path="/buy" element={<Payment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
