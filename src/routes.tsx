import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NoticePage from "./pages/NoticePage";
import SalePage from "./pages/SalePage";
import PurchasePage from "./pages/PurchasePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import EditFreeBoardPage from "./pages/EditFreeBoardPage";
import DetailFreeBoardPage from "./pages/DetailFreeBoardPage";

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
  {
    path: "/freeboard/editfreeboard",
    element: <EditFreeBoardPage />,
  },
  {
    path: "/detailfreeboardpage/:freeboardpageid",
    element: <DetailFreeBoardPage />,
  },
];

export default routes;
