import { User } from "./User";

export interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
    login: (username:string,password:string) => void;
    logout: () => void;
}

