import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ShowDashboard from "./src/components/Dashboard-UI/ShowDashboard";
import Notification from "./src/components/Notification/Notification";
import ShowAds from "./src/components/AdsManagement/ShowAds";
import AdDetails from "./src/components/AdsManagement/AdDetails";
import Container from "./src/components/UserManagement/UserContainer";
import UserManagementUI from "./src/components/UserManagement/UserManagementUI";
import UserDetails from "./src/components/UserManagement/UserDetails";
import ReportUI from "./src/components/Reports-analytics/ReportUI";
import ReportDetails from "./src/components/Reports-analytics/ReportDetails";

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
  },
  {
    path: "/user-management",
    element: <UserManagementUI />,
  },
  {
    path: "/user-management/:id",
    element: <UserDetails />,
  },
  {
    path: '/report-analytics',
    element: <ReportUI />,

  },
  {
    path: "/report-analytics/:id",
    element: <ReportDetails />,
  }

]);
