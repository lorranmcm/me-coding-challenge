import React from "react";

type UserType = {
  name: string;
  lastAccess: string;
  password: string;
  email: string;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    name: "",
    lastAccess: "",
    password: "",
    email: "",
  },
  setState: () => {},
};

export const UserContext = React.createContext<PropsUserContext>(DEFAULT_VALUE);

export const UserContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [state, setState] = React.useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
