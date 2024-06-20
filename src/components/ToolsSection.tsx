import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

const TABS = {
  SYSTEMIQUE: 0,
  ART: 1,
  MEDITATION: 2,
} as const;

const DESCRIPTIONS = {
  [TABS.SYSTEMIQUE]: `
La thérapie systémique examine les individus dans le contexte de leur famille \
et de leurs relations, mettant l'accent sur les schémas de communication et les \
interactions familiales. 

Elle guide les membres de la famille pour identifier les comportements \
dysfonctionnels et trouver des solutions ensemble, favorisant ainsi la \
compréhension mutuelle et des relations plus saines.
`,
  [TABS.ART]: `
L'art-thérapie utilise le processus créatif de l'art pour améliorer le bien-être \
mental, émotionnel et physique. 
Cette méthode permet aux individus d'exprimer des sentiments \
difficiles à verbaliser, d'explorer leur imagination et d'accéder à des aspects \
profonds de leur psyché.

Elle est particulièrement efficace pour ceux qui ont du mal à s'exprimer par \
des moyens traditionnels.
`,
  [TABS.MEDITATION]: `
La mindfulness et la méditation intègrent des techniques de pleine conscience pour \
aider les individus à rester ancrés dans le moment présent et à réduire le stress.

Ces pratiques favorisent une meilleure gestion des émotions, une réduction de \
l'anxiété et une amélioration globale du bien-être mental.
En cultivant une attention sans jugement, elles permettent de développer une \
plus grande résilience et clarté mentale.
`,
} as const;

export const ToolsSection = () => {
  const [tabIndex, setTabIndex] = React.useState<keyof typeof DESCRIPTIONS>(0);

  return (
    <Card>
      <CardHeader title="Mes outils"></CardHeader>
      <CardContent>
        <Tabs value={tabIndex} onChange={(_, i) => setTabIndex(i)}>
          <Tab label="Thérapie systémique" value={TABS.SYSTEMIQUE}></Tab>
          <Tab label="Art-thérapie" value={TABS.ART}></Tab>
          <Tab label="Mindfulness et meditation" value={TABS.MEDITATION}></Tab>
        </Tabs>
        <div className="mt-4">
          <Typography className="whitespace-break-spaces">
            {DESCRIPTIONS[tabIndex]}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
