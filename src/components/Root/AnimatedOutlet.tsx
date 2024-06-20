import { Outlet } from "./Outlet";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export const AnimatedOutlet = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (window) {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};
