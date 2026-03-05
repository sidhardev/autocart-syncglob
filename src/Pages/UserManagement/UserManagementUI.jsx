import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import Container from "./UserContainer";
import Layout from "../../components/Layout";

function UserManagementUI() {
  return (
    <>
      <Layout>
        <Container />
      </Layout>
    </>
  );
}

export default UserManagementUI;
