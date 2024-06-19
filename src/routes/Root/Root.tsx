import { Outlet } from "react-router-dom";
import { Appbar } from "./Appbar";

export const Root = () => {
  return (
    <div className="flex min-h-screen bg-fixed bg-[radial-gradient(circle,#F0DEE5,#FFDAD6)]">
      <Appbar />
      <div className="flex-1 mt-16">
        <Outlet />
      </div>
    </div>
  );
};
