import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import StoryContainer from "./StoryContainer";
import Layout from "../../components/Layout";

function StoryUI() {
    return (
        <>
            <Layout>
                <StoryContainer />
            </Layout>
        </>
    );
}

export default StoryUI;