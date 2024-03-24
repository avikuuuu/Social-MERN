import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
