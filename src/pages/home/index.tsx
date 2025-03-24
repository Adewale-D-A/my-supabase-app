import { Link } from "react-router-dom";
import ExportToCSV from "../../components/export-to-csv";

export default function Home() {
  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className=" flex flex-col w-full gap-10 items-center">
        <h1 className=" text-4xl font-semibold">Home</h1>
        <div className=" flex items-center gap-5">
          <Link to={"/login"}>LOGIN</Link>
          <Link to={"/sign-up"}>SIGNUP</Link>
        </div>
        <div className=" flex items-center gap-5">
          <ExportToCSV />
          <Link to={"/status-update"}>UPDATE STATUS</Link>
          <Link to={"/export-to-print"}>EXPORT TO PRINT</Link>
          <Link to={"/export-to-pdf"}>EXPORT TO PRINT</Link>
        </div>
      </div>
    </div>
  );
}
