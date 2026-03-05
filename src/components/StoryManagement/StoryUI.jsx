import { Box } from "@mui/material";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/Topbar";
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
                        overflowX: "auto",
                        overflowY: "auto",
                        marginLeft: "260px",
                        minHeight: "calc(100vh - 64px)",
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