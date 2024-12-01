import Intro from "./pages/Intro"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupFormDemo } from "./components/AceternityComponents/main/SignUpForm";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />   
        <Route path="SignUpForm" element={<SignupFormDemo />} />         

      </Routes>
    </BrowserRouter>
  )
}

export default App
