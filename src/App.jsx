import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RegisterForm from './components/RegisterForm/PatientRegisterForm.jsx';
import DoctorRegisterForm from './components/RegisterForm/DoctorRegistration.jsx';
import HowToUse from "./components/HowToUse/HowToUse.jsx";
import DAF_FAF from './components/DAF_FAF/DAF_FAF.jsx';
import PatientLogin from './components/LoginForm/PatientLogin.jsx';
import DoctorLogin from './components/LoginForm/DoctorLogin.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/doctor-register" element={<DoctorRegisterForm />} />
      <Route path="/how-to-use" element={<HowToUse />} />
      <Route path="/DAF_FAF" element={<DAF_FAF />} />
      <Route path="/patient-login" element={<PatientLogin />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
   
    </Routes>
  );
}

export default App;
