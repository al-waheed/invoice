import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard"/>} />
            
            {/* Define the routes for your components */}
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/activity" element={<Activity />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
