import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Blank() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/home");
  }, []);
  return <></>;
}
