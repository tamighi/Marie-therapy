import { AnimatedOutlet } from "./AnimatedOutlet";
import { Appbar } from "./Appbar";
import { Footer } from "./Footer";

export const Root = () => {
  return (
    <div className="bg-fixed bg-[radial-gradient(circle,#F0DEE5,#FFDAD6)]">
      <Appbar />
      <div className="min-h-screen">
        <AnimatedOutlet />
      </div>
      <Footer />
    </div>
  );
};
