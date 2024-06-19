import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ContactSection,
  HomePage,
  ModalitiesSection,
  OfficesSection,
  Root,
  ToolsSection,
  TypeSection,
} from "components";
import { StyledEngineProvider, createTheme } from "@mui/material";

import "./index.css";
import { ThemeProvider } from "@emotion/react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "types",
          element: <TypeSection />,
        },
        {
          path: "tools",
          element: <ToolsSection />,
        },
        {
          path: "offices",
          element: <OfficesSection />,
        },
        {
          path: "contact",
          element: <ContactSection />,
        },
        {
          path: "modalities",
          element: <ModalitiesSection />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#F08080",
    },
  },
});

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
