import Intro from "./pages/Intro"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SignupFormDemo } from "./components/AceternityComponents/main/SignUpForm";
import Login from "./pages/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />   
        <Route path="login" element={<Login/>} />         

      </Routes>
    </BrowserRouter>
  )
}

export default App;