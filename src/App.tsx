import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, PresentationPage, Root } from "routes";

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
  return <RouterProvider router={router} />;
};

export default App;
