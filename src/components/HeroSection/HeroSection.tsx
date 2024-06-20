import { BaseSection } from "components/BaseSection";
import { HeroDescription } from "./HeroDescription";
import { HeroImage } from "./HeroImage";

export const HeroSection = () => {
  return (
    <BaseSection id="hero">
      <div
        className="h-full flex md:flex-row flex-col-reverse items-center gap-16"
      >
        <div className="flex-1">
          <HeroDescription />
        </div>
        <div className="flex-1">
          <HeroImage />
        </div>
      </div>
    </BaseSection>
  );
};
