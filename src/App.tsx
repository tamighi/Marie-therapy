import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, PresentationPage, Root } from "routes";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";

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
          path: "presentation",
          element: <PresentationPage />,
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
