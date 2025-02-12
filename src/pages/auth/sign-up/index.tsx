import { SyntheticEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { supaClient } from "../../../config/superbase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      const supabase = supaClient;
      try {
        const { error, data } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastname,
              username: username,
            },
          },
        });
        console.log({ error, data });
      } catch (error) {}
    },
    [firstName, lastname, username, email, password]
  );

  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className=" flex flex-col w-full gap-10 items-center">
        <div className=" flex items-center gap-3">
          <Link to="/"> {"<<"} Back</Link>
          <h1>Signup Page</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center gap-6 max-w-screen-sm w-full"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className=" p-3 rounded-md border border-primary w-full"
            value={email}
            onChange={(e) => setEmail(e.target?.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className=" p-3 rounded-md border border-primary w-full"
            value={password}
            onChange={(e) => setPassword(e.target?.value)}
          />
          <input
            type="text"
            placeholder="Enter your first name"
            className=" p-3 rounded-md border border-primary w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target?.value)}
          />
          <input
            type="text"
            placeholder="Enter your lastname"
            className=" p-3 rounded-md border border-primary w-full"
            value={lastname}
            onChange={(e) => setLastname(e.target?.value)}
          />
          <input
            type="text"
            placeholder="Enter your username"
            className=" p-3 rounded-md border border-primary w-full"
            value={username}
            onChange={(e) => setUsername(e.target?.value)}
          />
          <button
            type="submit"
            className=" p-3 px-10 rounded-md bg-primary text-white hover:bg-gray-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
