import { User } from "./User";

export interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
    register: (username:string,password:string,firstName:string,lastName:string) => void;
    login: (username:string,password:string) => void;
    logout: () => void;
}

