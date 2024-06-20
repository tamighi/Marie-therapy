import { Hero } from "./Hero";
import { PresentationSection } from "./PresentationSection";
import { ToolsSection } from "./ToolsSection";

export const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <div
        id="presentation"
        className="h-screen flex md:flex-row flex-col-reverse items-center
          w-11/12 lg:w-4/5 m-auto pt-24 box-border gap-16"
      >
        <div className="flex-1 mb-20">
          <PresentationSection />
        </div>
        <div className="flex-1 mb-20">
          <ToolsSection />
        </div>
      </div>
    </div>
  );
};
