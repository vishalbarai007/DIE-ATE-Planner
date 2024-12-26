import Intro from "./pages/Intro"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ThemeState from "./contexts/theme/ThemeState"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SplashScreen from "./components/DeveloperDefineComponents/SplashScreen";

const App = () => {
  return (
    <ThemeState>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/Intro" element={<Intro />} />   
        <Route path="/Intro/login" element={<Login/>} />   
        <Route path="/home" element={<Home/>} />        
        <Route path="/profile" element={<Profile/>} />               
      </Routes>
      
    </BrowserRouter>
    </ThemeState>
  )
}

export default App;