import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";
import CategoryPages from "@/pages/category";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormPage from "@/pages/Form";
import RegisterPage from "./pages/register";
import FavoritePage from "./pages/favorite";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        < HomePage />
      ),
    },
    {
      path: "/detail/:id",
      element: <DetailPage />,
    },
    {
      path: "/category/:id",
      element: <CategoryPages />,
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
    },
    {
      path: "/Form",
      element: <FormPage />,
    },
    {
      path: "/Register",
      element: <RegisterPage />,
    },

  ]);
  return (
    <div>

      <RouterProvider router={router} />

    </div >
  )
}

export default App
