import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/AppLayout";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
