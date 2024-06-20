import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export const PresentationSection = () => {
  return (
    <Card>
      <CardHeader title="Qui suis-je ?"></CardHeader>
      <CardContent>
        <Typography>
          Je m'appelle Marie Somville, thérapeute clinique spécialisée en
          thérapie clinique. Avec 3 années d'expérience, j'accompagne les
          individus, couples et familles dans la gestion de l'anxiété, de la
          dépression et des conflits relationnels.
          <br /> <br />
          Mon approche intégrative, combinant thérapie cognitive-comportementale
          et pleine conscience, vise à offrir un espace sécurisé et bienveillant
          pour favoriser la guérison et le développement personnel.
          Consultations disponibles en personne et en ligne.
          <br /> <br />
          Prenez rendez-vous pour commencer votre chemin vers le mieux-être.
        </Typography>
      </CardContent>
    </Card>
  );
};
