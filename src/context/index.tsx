import React from "react";

import { UserContextProvider } from "./userContext";

const GlobalContext: React.FC<ChildrenProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default GlobalContext;
