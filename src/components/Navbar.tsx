import React from "react";
import logo from "../assets/logo.png";
import { ProfileModal } from "./ProfileModal";
import { ProfileSettings } from "./ProfileSettings";
export function Navbar() {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  return (
    <nav className="absolute w-screen bg-white shadow-md px-4 py-3 z-2">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <img src={logo} className="h-12" alt="Logo Mercado Eletrônico" />
        <div className="relative">
          <ProfileSettings
            onClick={() => {
              setModalIsVisible(!modalIsVisible);
            }}
          />
          <ProfileModal visibility={modalIsVisible} />
        </div>
      </div>
    </nav>
  );
}
