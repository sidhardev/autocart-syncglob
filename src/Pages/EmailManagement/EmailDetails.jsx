import { Box, Typography, CircularProgress } from "@mui/material";
import CommonButton from "../../common/Button";
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';
import TopBar from "../../components/layout/Topbar";
import Sidebar from "../../components/layout/Sidebar";
import GoBackButton from "../../common/GoBackButton";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EmailDetails() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type") || "inbox";
    const [emailData, setEmailData] = useState(null);
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmailData = async () => {
            try {
                const listRes = await fetch("/email-data.json");
                const listData = await listRes.json();
                const list = listData[type] || [];
                const emailRow = list.find((item) => item.id === id);

                const detailRes = await fetch("/email-details.json");
                const detailData = await detailRes.json();
                const emailDetail = detailData[type]?.[id];

                setEmailData(emailRow);
                setDetails(emailDetail);
            } catch (err) {
                console.error("Failed to load email details", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEmailData();
    }, [id, type]);

    const getStatusColor = (status) => {
        switch (status) {
            case "Unread": return "#EF4444";
            case "Not Delivered": return "#EAB308";
            case "Opened":
            case "Read": return "#9CA3AF";
            case "Delivered": return "#3B82F6";
            default: return "#9CA3AF";
        }
    };

    if (loading) {
        return (
            <>
                <TopBar />
                <Box sx={{ display: "flex" }}>
                    <Sidebar />
                    <Box sx={{ flexGrow: 1, p: 3, top: "64px", position: "relative", minHeight: "calc(100vh - 64px)", overflow: "auto", }}>
                        <CircularProgress />
                    </Box>
                </Box>
            </>
        );
    }

    if (!emailData) {
        return (
            <>
                <TopBar />
                <Box sx={{ display: "flex" }}>
                    <Sidebar />
                    <Box sx={{ flexGrow: 1, p: 3, top: "64px", position: "relative", minHeight: "calc(100vh - 64px)", overflow: "auto", }}>
                        <Typography variant="h6">Email not found.</Typography>
                    </Box>
                </Box>
            </>
        );
    }

    const statusColor = getStatusColor(emailData?.status);
    const title = `${emailData?.status || 'Draft'} Mail`;

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
                    <Box sx={{ width: "100%", p: 2 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 4,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <GoBackButton />
                                <Box
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        bgcolor: statusColor,
                                        borderRadius: 1,
                                    }}
                                />
                                <Typography variant="h5" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {title}
                                    <Typography variant="body2" sx={{ color: '#9CA3AF', fontWeight: '500', fontSize: '0.75rem', mt: 0.5 }}>
                                        {emailData?.date || emailData?.dateSent || emailData?.statusDate} &nbsp;&nbsp;&nbsp; {emailData?.time}
                                    </Typography>
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", gap: 2 }}>
                                <CommonButton
                                    text={type === 'outbox' ? "Resend Mail" : "Reply Mail"}
                                    size="medium"
                                    icon={<ReplyIcon fontSize="small" />}
                                    color="#ffffff"
                                    sx={{
                                        color: '#9CA3AF', border: '1px solid #E5E7EB',
                                        '&:hover': { bgcolor: '#f3f4f6' }
                                    }}
                                />
                                <CommonButton
                                    text="Forward Mail"
                                    size="medium"
                                    icon={<ForwardIcon fontSize="small" />}
                                    color="#ffffff"
                                    sx={{
                                        color: '#9CA3AF', border: '1px solid #E5E7EB',
                                        '&:hover': { bgcolor: '#f3f4f6' }
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 4,
                                border: "1px solid #E5E7EB",
                                p: 4,
                                mb: 4
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                <Typography variant="body1" color="text.secondary" sx={{ opacity: 0.8 }}>
                                    Subject:
                                </Typography>
                                <Typography variant="h6" fontWeight={600}>
                                    {details?.subject || "No Subject"}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    height: "1px",
                                    bgcolor: "#E5E7EB",
                                    mb: 3,
                                }}
                            />

                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, opacity: 0.8, whiteSpace: "pre-line" }}>
                                {details?.body || "No Content"}
                            </Typography>
                        </Box>

                        {(type === 'outbox' || details?.userReply) && (
                            <Box
                                sx={{
                                    bgcolor: "#fff",
                                    borderRadius: 4,
                                    border: "1px solid #E5E7EB",
                                    p: 4,
                                    mb: 4
                                }}
                            >
                                <Typography variant="h6" fontWeight={600}>
                                    User Reply
                                </Typography>

                                <Box sx={{ height: "1px", bgcolor: "#E5E7EB", my: 3 }} />

                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, opacity: 0.8, whiteSpace: "pre-line" }}>
                                    {details?.userReply || "No reply yet....."}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default EmailDetails;
