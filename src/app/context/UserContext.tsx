"use client";

import { createContext, useContext, useState } from "react";
import { User } from "./Interfaces/User";
import { UserContextType } from "./Interfaces/UserContextType";
import axios, { AxiosResponse, AxiosError } from "axios";
const userContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  register: () => {},
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const login = async (username: string, password: string) => {
    const userLoginData = {
      username: username,
      passwordHash: password,
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userLoginData),
    };

    fetch("http://localhost:8080/users/login", options)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:" + JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  };

  const logout = () => {};

  const register = (
    username: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const userData: User = {
      username: username,
      passwordHash: password,
      firstName: firstName,
      lastName: lastName,
    };
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userData),
    };

    fetch("http://localhost:8080/user/", options)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:" + JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  };

  return (
    <userContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
