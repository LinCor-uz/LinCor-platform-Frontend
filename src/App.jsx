import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Course from "./pages/Course";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Coursereg from "./pages/Coursereg";
import Settings from "./pages/Settings";

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
      <Route path="/settings" element={<Settings/>} />
    </Routes>
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import VideoKurslar from "./pages/VideoKurslar";
// import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (

    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/course" element={<Course />} />
          <Route path="/buy" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />}></Route>
          <Route path="/video-courses" element={<VideoKurslar />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
