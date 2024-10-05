import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sideDivOpen, setSideDivOpen] = useState(false);

  const toggleSideDiv = () => {
    setSideDivOpen(!sideDivOpen);
  };

  return (
    <SidebarContext.Provider value={{ sideDivOpen, toggleSideDiv }}>
      {children}
    </SidebarContext.Provider>
  );
};
