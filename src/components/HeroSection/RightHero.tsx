import { mariePortrait } from "assets";

export const RightHero = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <img className="w-4/5 md:w-full lg:w-4/5" src={mariePortrait}></img>
    </div>
  );
};
