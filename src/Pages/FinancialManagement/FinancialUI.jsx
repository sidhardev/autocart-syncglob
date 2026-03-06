import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import FinancialContainer from "./FinancialContainer";
import Layout from "../../components/layout/Layout.jsx";

function FinancialUI() {
  return (
    <>
      <Layout>
        <FinancialContainer />
      </Layout>
    </>
  );
}

export default FinancialUI;
