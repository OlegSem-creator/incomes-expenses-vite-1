import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogInPage from "./pages/Auth/LogInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ResetPage from "./pages/Auth/ResetPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
// import DashboardPage from "./DashboardPages/DashboardPage";
// import RootPage from "./pages/RootPage/RootPage";
import RootLayout from "./pages/Root/Root";
import RootPage from "./pages/Root/RootPage";
// import DashboardPage from "./DashboardPages/DashboardPage";
import DashboardHomePage from "./pages/Dashboard/DashboardHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <RootPage />,
        children: [
          {
            index: true,
            element: <DashboardHomePage />,
            children: [
              {
                index: true,
                element: <Incomes />,
              },
              {
                path: "/expenses",
                element: <Epenses />,
              },
              {
                path: "/borrow",
                element: <Borrow />,
              },
              {
                path: "/lend",
                element: <Lend />,
              },
              {
                path: "/other",
                element: <Other />,
              },
            ],
          },
        ],
      },
      {
        path: "login",
        element: <LogInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "reset",
        element: <ResetPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
