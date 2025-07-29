"use client";

import { useState } from "react";
import { useUser } from "../context/UserContext";
import { usePage } from "../context/PageContext";
import "../css/signup.css";
import { useEffect } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { signup } = useUser();
  const { setTitle } = usePage();

  useEffect(() => {
    setTitle("Sign Up");
  }, []);

  const colors = {
    form: "has-background-cream",
    input: "has-background-cream-95 has-text-black",
    submit: "has-background-electricblue has-text-black",
    signup: "has-text-black",
    label: "has-text-black",
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

  const onChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (value: string) => void
  ) => {
    e.target.value != null ? setState(e.target.value) : setState("");
  };

  const onSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password, firstName, lastName);
    signup(username, password, firstName, lastName);
  };

  return (
    <div className={pageCSS.main_container}>
      <div className={pageCSS.grid}>
        <form className={pageCSS.form} onSubmit={onSignup}>
          <div className={pageCSS.grid}>
            <h1 className={pageCSS.signUpTitle}>Sign Up</h1>
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
              <label className={pageCSS.label}>First Name</label>
              <div className={pageCSS.control}>
                <input
                  className={pageCSS.input}
                  required
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => onChanges(e, setFirstName)}
                />
              </div>
            </div>

            <div className={pageCSS.form_field}>
              <label className={pageCSS.label}>Last Name</label>
              <div className={pageCSS.control}>
                <input
                  className={pageCSS.input}
                  required
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => onChanges(e, setLastName)}
                />
              </div>
            </div>

            <div className={pageCSS.form_field}>
              <div className={pageCSS.control}>
                <button className={pageCSS.submitButton} type="submit">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
