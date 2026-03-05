import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ShowDashboard from "./src/Pages/Dashboard-UI/ShowDashboard";
import Notification from "./src/Pages/Notification/Notification";
import ShowAds from "./src/Pages/AdsManagement/ShowAds";
import AdDetails from "./src/Pages/AdsManagement/AdDetails";
import UserManagementUI from "./src/Pages/UserManagement/UserManagementUI";
import UserDetails from "./src/Pages/UserManagement/UserDetails";
import ReportUI from "./src/Pages/Reports-analytics/ReportUI";
import ReportDetails from "./src/Pages/Reports-analytics/ReportDetails";
import MessageUI from "./src/Pages/MessageManagement/MessageUI";
import FinancialUI from "./src/Pages/FinancialManagement/FinancialUI";
import MessageDetails from "./src/Pages/MessageManagement/MessageDetails";
import EmailUI from "./src/Pages/EmailManagement/EmailUI";
import EmailDetails from "./src/Pages/EmailManagement/EmailDetails";
import StoryUI from "./src/Pages/StoryManagement/StoryUI";
import StoryDetails from "./src/Pages/StoryManagement/StoryDetails";
import Main from "./src/Pages/MainPage/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
  },
  {
    path: "/financial-management",
    element: <FinancialUI />,
  },
  {
    path: "/message-management",
    element: <MessageUI />,
  },
  {
    path: "/message-management/:id",
    element: <MessageDetails />,
  },
  {
    path: "/email-management",
    element: <EmailUI />,
  },
  {
    path: "/email-management/:id",
    element: <EmailDetails />,
  },
  {
    path: "/story-management",
    element: <StoryUI />,
  },
  {
    path: "/story-management/:id",
    element: <StoryDetails />,
  }

]);
