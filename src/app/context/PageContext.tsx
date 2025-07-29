"use client";

import { createContext, useContext, useState } from "react";
import { PageContextType } from "./Interfaces/PageContextType";
import Header from "../components/Header";
const pageContext = createContext<PageContextType>({
  title: "",
  setTitle: () => {},
});

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>("");

  return (
    <pageContext.Provider value={{ title, setTitle }}>
      <Header title={title} />
      {children}
    </pageContext.Provider>
  );
};

export const usePage = () => useContext(pageContext);
