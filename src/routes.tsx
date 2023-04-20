import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NoticePage from "./pages/NoticePage";
import SalePage from "./pages/SalePage";
import PurchasePage from "./pages/PurchasePage";
import EditFreeBoardPage from "./pages/EditFreeBoardPage";
import DetailFreeBoardPage from "./pages/DetailFreeBoardPage";
import FreeBoardPage from "./pages/FreeBoardPage";
import CompanyPage from "./pages/CompanyPage";
import EmployeePage from "./pages/EmployeePage";

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
    path: "/company",
    element: <CompanyPage />,
  },
  {
    path: "/employee",
    element: <EmployeePage />,
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
