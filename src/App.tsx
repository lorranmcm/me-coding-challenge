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
    <div className="bg-slate-200 h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="h-full w-full mx-8 my-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default App;
