import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage } from "routes/Home";
import { PresentationPage } from "routes/Presentation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/presentation",
    element: <PresentationPage />
  }
], { basename: import.meta.env.BASE_URL });

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
