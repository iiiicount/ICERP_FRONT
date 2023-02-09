import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NoticePage from "./pages/NoticePage";
import SalePage from "./pages/SalePage";
import PurchasePage from "./pages/PurchasePage";
import FreeBoardPage from "./pages/FreeBoardPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/notice",
    element: <NoticePage />,
  },
  {
    path: "/sale",
    element: <SalePage />,
  },
  {
    path: "/purchase",
    element: <PurchasePage />,
  },
  {
    path: "/freeboard",
    element: <FreeBoardPage />,
  },
];

export default routes;
