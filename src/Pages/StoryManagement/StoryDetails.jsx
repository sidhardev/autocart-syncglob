import { Box, Typography } from "@mui/material";
import TopBar from "../../components/layout/Topbar";
import Sidebar from "../../components/layout/Sidebar";
import GoBackButton from "../../common/GoBackButton";
import CommonButton from "../../common/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

function StoryDetails() {
    const { id } = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        async function fetchStory() {
            try {
                const response = await fetch("/story-data.json");
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                const selected = data.find(s => s.id === id);
                setStory(selected);
            } catch (err) {
                console.error("Failed to load story details");
            }
        }
        fetchStory();
    }, [id]);

    if (!story) {
        return (
            <>
                <TopBar />
                <Box sx={{ display: "flex" }}>
                    <Sidebar />
                    <Box sx={{ flexGrow: 1, p: 3, marginLeft: "260px", top: "64px", position: "relative" }}>
                        <Typography>Loading...</Typography>
                    </Box>
                </Box>
            </>
        );
    }



    const getStatusColor = (status) => {
        switch (status) {
            case "Flagged": return "#EAB308";
            case "Reported": return "#EF4444";
            case "Active": return "#22C55E";
            case "Expired": return "#6B7280";
            default: return "#9CA3AF";
        }
    };

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
                        marginLeft: "260px",
                        minHeight: "calc(100vh - 64px)",
                        p: 3,
                        background: "#F9F9F9"
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <GoBackButton />
                            <Box sx={{ width: 12, height: 12, bgcolor: getStatusColor(story.status), borderRadius: "2px" }} />
                            <Typography variant="h5" fontWeight="bold">
                                {story.status}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {story.status === 'Flagged' ? (
                                <>
                                    <CommonButton text="Mark Safe" size="medium" iconName="approve" sx={{ bgcolor: '#60A5FA', '&:hover': { bgcolor: '#3b82f6' } }} />
                                    <CommonButton text="Warn User" size="medium" icon={<ReportProblemOutlinedIcon fontSize="small" sx={{ color: '#fff' }} />} sx={{ bgcolor: '#F97316', '&:hover': { bgcolor: '#f97316cc' } }} />
                                    <CommonButton text="Delete Story" color="error" size="medium" iconName="delete" />
                                </>
                            ) : (
                                <CommonButton text="Delete Story" color="error" size="medium" iconName={"delete"} />
                            )}
                        </Box>
                    </Box>

                    <Box sx={{ bgcolor: "#fff", borderRadius: 4, border: "1px solid #E5E7EB", p: 4 }}>
                        <Typography variant="h6" fontWeight="bold" mb={3}>Story Details</Typography>

                        <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap", mb: 2 }}>
                            <Box
                                component="img"
                                src={story.storyImage}
                                alt="Story Media"
                                sx={{ width: { xs: '100%', md: 400 }, height: { xs: 300, md: 400 }, borderRadius: 2, objectFit: "cover" }}
                            />
                            <Box sx={{ flex: 1, minWidth: "300px", pt: 1 }}>
                                <Typography variant="body2" color="#9CA3AF" mb={2}>Caption</Typography>
                                <Typography variant="h6" fontWeight={600} sx={{ color: '#374151', lineHeight: 1.6, pr: 4 }}>
                                    Lorem ipsum dolor sit amet consectetur. Varius mauris sed sed et nec diam volutpat proin cum. Volutpat massa egestas nunc ut convallis at adipiscing gravida dictum. Tristique at enim sem.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default StoryDetails;