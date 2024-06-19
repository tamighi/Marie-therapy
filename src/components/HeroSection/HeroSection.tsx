import { LeftHero } from "./LeftHero";
import { RightHero } from "./RightHero";

export const HeroSection = () => {
  return (
    <div className="md:h-screen">
      <div
        className="h-full md:flex-row flex-col-reverse flex items-center w-11/12
          lg:w-4/5 m-auto pt-24 box-border"
      >
        <div className="flex-1 mb-20">
          <LeftHero />
        </div>
        <div className="flex-1 mb-20">
          <RightHero />
        </div>
      </div>
    </div>
  );
};
