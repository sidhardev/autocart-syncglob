import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ShowDashboard from "./src/components/Dashboard-UI/ShowDashboard";
import Notification from "./src/components/Notification/Notification";
import ShowAds from "./src/components/AdsManagement/ShowAds";
import AdDetails from "./src/components/AdsManagement/AdDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/notifications",
    element: <Notification />,
  },
  {
    path: "/dashboard",
    element: <ShowDashboard />,
  },
  {
    path: "/ads-management",
    element: <ShowAds />,
  },
  {
    path: "/ads-management/:id",
    element: <AdDetails />,
  }
]);
