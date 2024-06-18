import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ContactSection,
  HomePage,
  ModalitiesSection,
  OfficesSection,
  Root,
  ToolsSection,
  TypeSection,
} from "routes";
import { StyledEngineProvider } from "@mui/material";

import "./index.css";

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
  { basename: import.meta.env.BASE_URL },
);

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
};

export default App;
