import { Outlet } from "react-router-dom";
import { Appbar } from "./Appbar";

export const Root = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};
