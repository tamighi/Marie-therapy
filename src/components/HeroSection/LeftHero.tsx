import { ArrowCircleRight } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const LeftHero = () => {
  return (
    <div className="flex flex-col gap-8 md:text-left text-center">
      <div className="flex flex-col gap-4">
        <Typography className="font-bold" variant="h3">
          Marie Somville
        </Typography>
        <Typography className="font-bold" variant="h3">
          Thérapeute en psychologie
          <br /> clinique
        </Typography>
      </div>
      <Typography variant="h4">
        Un accueil personnalisé pour vos besoins.
      </Typography>
      <div className="flex gap-2 items-center md:justify-normal justify-center">
        <Typography>En savoir plus</Typography>
        <ArrowCircleRight />
      </div>
    </div>
  );
};
