import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className=" flex flex-col w-full gap-10 items-center">
        <h1 className=" text-4xl font-semibold">Home</h1>
        <div className=" flex items-center gap-5">
          <Link to={"/login"}>LOGIN</Link>
          <Link to={"/sign-up"}>SIGNUP</Link>
        </div>
      </div>
    </div>
  );
}
