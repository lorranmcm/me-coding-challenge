import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldRedirect = () => {
    if (location.pathname === "/") {
      navigate("/auth");
    }
  };

  React.useEffect(() => {
    shouldRedirect();
  }, []);

  return (
    <div className="bg-slate-200 h-screen relative">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}
export default App;
