import { LeftHero } from "./LeftHero";
import { RightHero } from "./RightHero";

export const HeroSection = () => {
  return (
    <div
      className="h-screen md:flex-row flex-col-reverse flex items-center w-11/12
        lg:w-4/5 m-auto"
    >
      <div className="flex-1">
        <LeftHero />
      </div>
      <div className="flex-1">
        <RightHero />
      </div>
    </div>
  );
};
