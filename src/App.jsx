import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import DAF_FAF from './components/DAF_FAF/DAF_FAF.jsx';
 // Ensure this component exists

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/DAF_FAF" element={<DAF_FAF />} /> {/* Ensure this route exists */}
      </Routes>
    
  );
}

export default App;
