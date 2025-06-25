"use client"

import { createContext, useContext, useState } from "react";
import { User } from "./Interfaces/User";
import { UserContextType } from "./Interfaces/UserContextType";

const userContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [user,setUser] = useState<User | null>(null);

    const login = (username:string,password:string) => {

    }

    const logout = () => {

    }
    return <userContext.Provider value={{user,setUser,login,logout}}>{children}</userContext.Provider>
}

export const useUser = () => useContext(userContext);