import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ShowDashboard from "./src/components/Dashboard-UI/ShowDashboard";
import Notification from "./src/components/Notification/Notification";
import ShowAds from "./src/components/AdsManagement/ShowAds";
import AdDetails from "./src/components/AdsManagement/AdDetails";
import UserManagementUI from "./src/components/UserManagement/UserManagementUI";
import UserDetails from "./src/components/UserManagement/UserDetails";
import ReportUI from "./src/components/Reports-analytics/ReportUI";
import ReportDetails from "./src/components/Reports-analytics/ReportDetails";
import MessageUI from "./src/components/MessageManagement/MessageUI";
import FinancialUI from "./src/components/FinancialManagement/FinancialUI";
import MessageDetails from "./src/components/MessageManagement/MessageDetails";
import EmailUI from "./src/components/EmailManagement/EmailUI";
import EmailDetails from "./src/components/EmailManagement/EmailDetails";
import StoryUI from "./src/components/StoryManagement/StoryUI";
import StoryDetails from "./src/components/StoryManagement/StoryDetails";
import Main from "./src/components/MainPage/Main";

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
