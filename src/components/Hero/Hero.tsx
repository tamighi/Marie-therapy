import { LeftHero } from "./LeftHero";
import { RightHero } from "./RightHero";

export const Hero = () => {
  return (
    <div className="md:h-screen">
      <div
        className="h-full flex md:flex-row flex-col-reverse items-center w-11/12
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
