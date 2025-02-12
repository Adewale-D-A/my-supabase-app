import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/sign-up";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>Nothing Found</h1>} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
