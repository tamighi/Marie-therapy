import { ArrowCircleDown } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

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
      <div className="flex gap-1 items-center md:justify-normal justify-center">
        <Button variant="contained" endIcon={<ArrowCircleDown />}>
          <Typography className="normal-case">En savoir plus</Typography>
        </Button>
      </div>
    </div>
  );
};
