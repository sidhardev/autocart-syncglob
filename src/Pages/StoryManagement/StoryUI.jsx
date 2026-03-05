import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import StoryContainer from "./StoryContainer";

function StoryUI() {
    return (
        <>
            <TopBar />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box
                    sx={{
                        flexGrow: 1,
                        width: "100%",
                        top: "64px",
                        position: "relative",
                        minHeight: "calc(100vh - 64px)", overflow: "auto",
                        p: 3,
                        background: "#F9F9F9"
                    }}
                >
                    <StoryContainer />
                </Box>
            </Box>
        </>
    );
}

export default StoryUI;