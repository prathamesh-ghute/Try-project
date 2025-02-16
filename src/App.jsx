import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SlotPropsSignIn from './SignIn';
import DashboardLayoutNavigationNested from './Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SlotPropsSignIn />} /> {/* Login Page */}
        <Route path="/dashboard" element={<DashboardLayoutNavigationNested />} /> {/* Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
