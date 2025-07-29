"use client";

import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { usePage } from "../context/PageContext";
import "../css/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const { setTitle } = usePage();

  useEffect(() => {
    setTitle("Login");
  }, []);

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);
    login(username, password);
  };

  const onChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (value: string) => void
  ) => {
    e.target.value != null ? setState(e.target.value) : setState("");
  };

  const pageCSS = {
    // CSS classes for my page :)
    main_container: "main-container fixed-grid has-21-cols",
    form: "form box cell fixed-grid has-21-cols is-col-start-9 is-col-span-5  mt-4 ",
    grid: "grid",
    form_field: "cell is-col-start-1 is-col-span-21 field",
    control: "control",
    input: "input",
    submitButton: "submit is-size-4 is-bold button is-fullwidth",
    label: "label mb-0",
    signUpTitle:
      "signup cell is-col-start-1 is-col-span-21 title has-text-centered",
  };

  return (
    <div className={pageCSS.main_container}>
      <div className={pageCSS.grid}>
        <form className={pageCSS.form} onSubmit={onLogin}>
          <div className={pageCSS.grid}>
            <h1 className={pageCSS.signUpTitle}>Login</h1>

            <div className={pageCSS.form_field}>
              <label className={pageCSS.label}>Username</label>
              <div className={pageCSS.control}>
                <input
                  className={pageCSS.input}
                  required
                  type="text"
                  placeholder="JDoe123"
                  value={username}
                  onChange={(e) => onChanges(e, setUsername)}
                />
              </div>
            </div>

            <div className={pageCSS.form_field}>
              <label className={pageCSS.label}>Password</label>
              <div className={pageCSS.control}>
                <input
                  className={pageCSS.input}
                  required
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => onChanges(e, setPassword)}
                />
              </div>
            </div>
            <div className={pageCSS.form_field}>
              <div className={pageCSS.control}>
                <button className={pageCSS.submitButton} type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    // <div>
    //   <form onSubmit={onLogin}>
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => onChanges(e, setUsername)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => onChanges(e, setPassword)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}
