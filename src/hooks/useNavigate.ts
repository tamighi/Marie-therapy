import { useCallback } from "react";
import {
  useLocation,
  useNavigate as useNativeNavigate,
} from "react-router-dom";

type NavigateOptions = {
  state?: { section?: string };
};

export const useNavigate = () => {
  const nativeNavigate = useNativeNavigate();
  const location = useLocation();

  const scrollTo = (section: string, behavior: ScrollBehavior = "instant") => {
    const element = document.querySelector("#" + section);
    element?.scrollIntoView({ behavior, block: "start" });
  };

  const navigate = useCallback(
    (to: string, options?: NavigateOptions) => {
      const section = options?.state?.section;

      nativeNavigate(to);

      if (section) {
        scrollTo(section, location.pathname === to ? "smooth" : "instant");
      }
    },
    [location]
  );

  return navigate;
};
