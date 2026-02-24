import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ShowDashboard from "./src/components/Dashboard/ShowDashboard";
import Notification from "./src/components/Notification/Notification";
import ShowAds from "./src/components/AdsManagement/ShowAds";

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
]);
