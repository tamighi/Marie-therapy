import { useState } from "react";
import { useOutlet } from "react-router-dom";

export const Outlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};
