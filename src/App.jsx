import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root/Root";
import HomePage from "./pages/Home/Home";
import IncomesPage from "./pages/Incomes/Incomes";
import ExpensesPage from "./pages/Expenses/Expenses";
import BorrowPage from "./pages/Borrow/Borrow";
import LendPage from "./pages/Lend/Lend";
import ExchangesPage from "./pages/Exchanges/Exchanges";
import OtherPage from "./pages/Other/Other";
import SummaryPage from "./pages/Summary/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "incomes",
        element: <IncomesPage />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
      },
      {
        path: "borrow",
        element: <BorrowPage />,
      },
      {
        path: "lend",
        element: <LendPage />,
      },
      {
        path: "exchanges",
        element: <ExchangesPage />,
      },
      {
        path: "other",
        element: <OtherPage />,
      },
      {
        path: "summary",
        element: <SummaryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
