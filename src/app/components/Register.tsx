"use client"

import { useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";

export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const {register} = useUser();

    const onChanges = (e: React.ChangeEvent<HTMLInputElement>, setState: (value: string) => void) => {
        e.target.value != null ? setState(e.target.value) : setState("");
    }

    const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username, password, firstName, lastName);
        register(username,password,firstName,lastName);
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onRegister}>
                <input required type="text" placeholder="Username" value={username} onChange={(e) => onChanges(e, setUsername)} />
                <input required type="password" placeholder="Password" value={password} onChange={(e) => onChanges(e, setPassword)} />
                <input required type="text" placeholder="First Name" value={firstName} onChange={(e) => onChanges(e, setFirstName)} />
                <input required type="text" placeholder="Last Name" value={lastName} onChange={(e) => onChanges(e, setLastName)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )

}