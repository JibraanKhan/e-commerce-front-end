"use client"

import { useState } from "react";
import { useUser } from "../context/UserContext";
export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useUser();

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username,password);
        login(username,password);
    }

    const onChanges = (e: React.ChangeEvent<HTMLInputElement>, setState: (value: string) => void) => {
        e.target.value != null ? setState(e.target.value) : setState("");
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => onChanges(e, setUsername)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => onChanges(e, setPassword)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}