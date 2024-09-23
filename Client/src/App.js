import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateInvoice from "./components/CreateInvoice";
import Credentials from "./components/Credentials";
import SignUp from "./SignUp";

function App() {
  const excludedPath = ["/signup"];

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <div className="flex">
              {!excludedPath.includes(window.location.pathname) && <Navbar />}
              <main className="grow">
                <Routes>
                  <Route path="/" element={<Navigate to="/createInvoice" />} />
                  <Route
                    path="/createinvoice"
                    exact
                    element={<CreateInvoice />}
                  />
                  <Route path="/credentials" element={<Credentials />} />
                  <Route path="/signup" element={<SignUp />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
