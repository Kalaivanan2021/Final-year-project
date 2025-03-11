import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  console.log("✅ App Component Loaded!");

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element=  {<RegisterForm />} />
    </Routes>
  );
}

export default App;