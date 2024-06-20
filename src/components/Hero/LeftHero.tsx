import { ArrowCircleDown } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LeftHero = () => {
  const navigate = useNavigate();
  const scrollToPresentation = () => {
    navigate("/", { state: { id: "presentation", scrollBehavior: "smooth" } });
  };

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
        <Button
          variant="contained"
          onClick={scrollToPresentation}
          endIcon={<ArrowCircleDown />}
        >
          <Typography className="normal-case">En savoir plus</Typography>
        </Button>
      </div>
    </div>
  );
};
