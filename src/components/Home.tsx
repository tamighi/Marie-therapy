import React from "react";

import { useLocation } from "react-router-dom";

import { HeroSection } from "./HeroSection";
import { PresentationSection } from "./PresentationSection";
import { ToolsSection } from "./ToolsSection";
import { BaseSection } from "./BaseSection";

export const HomePage = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.id) {
      scrollToPresentation(location.state.id, location.state?.scrollBehavior);
    }
  }, [location]);

  const scrollToPresentation = (
    to: string,
    behavior: ScrollBehavior = "instant"
  ) => {
    const section = document.querySelector("#" + to);
    section?.scrollIntoView({ behavior, block: "start" });
  };
  return (
    <div>
      <HeroSection></HeroSection>
      <BaseSection id="presentation">
        <div
          className="h-full flex md:flex-row flex-col-reverse items-center
            gap-16"
        >
          <div className="flex-1">
            <PresentationSection />
          </div>
          <div className="flex-1">
            <ToolsSection />
          </div>
        </div>
      </BaseSection>
    </div>
  );
};
