import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import EmailContainer from "./EmailContainer";
import Layout from "../../components/layout/Layout.jsx";

function EmailUI() {
  return (
    <>
      <Layout>

        <EmailContainer />
      </Layout>
    </>
  );
}

export default EmailUI;
