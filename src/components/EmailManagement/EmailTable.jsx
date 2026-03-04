import { Box, Avatar, Typography } from "@mui/material";
import CommonTable from "../../common/Table";

export default function EmailTable({ rows, type = "inbox" }) {
    const getStatusStyles = (status) => {
        switch (status) {
            case "Unread":
                return { bg: "#FEE2E2", dot: "#EF4444", text: "#B91C1C", label: "Unread" };
            case "Read":
                return { bg: "#F3F4F6", dot: "#6B7280", text: "#374151", label: "Read" };
            case "Not Delivered":
                return { bg: "#FEF9C3", dot: "#EAB308", text: "#CA8A04", label: "Not Delivered" };
            case "Opened":
                return { bg: "#F3F4F6", dot: "#6B7280", text: "#374151", label: "Opened" };
            case "Delivered":
                return { bg: "#EFF6FF", dot: "#3B82F6", text: "#1D4ED8", label: "Delivered" };
            default:
                return { bg: "#F3F4F6", dot: "#6B7280", text: "#374151", label: status };
        }
    };

    const getColumns = () => {
        if (type === "outbox") {
            return [
                {
                    header: "Status",
                    render: (row) => {
                        const styles = getStatusStyles(row.status);
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    bgcolor: styles.bg,
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: 2,
                                    width: "fit-content",
                                }}
                            >
                                <Box sx={{ width: 8, height: 8, bgcolor: styles.dot, borderRadius: "50%" }} />
                                <Typography variant="body2" sx={{ color: styles.text }}>
                                    {styles.label}
                                </Typography>
                            </Box>
                        );
                    },
                },
                {
                    header: "Status Date",
                    render: (row) => <Typography fontWeight={600}>{row.statusDate}</Typography>,
                },
                {
                    header: "User Id",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar src={row.userAvatar} sx={{ width: 28, height: 28 }} />
                            <Typography fontWeight={500}>{row.userId}</Typography>
                        </Box>
                    ),
                },
                {
                    header: "Email Address",
                    render: (row) => <Typography fontWeight={500}>{row.email}</Typography>,
                },
                {
                    header: "User Action",
                    render: (row) => <Typography fontWeight={400} color="text.secondary">{row.action}</Typography>,
                },
                {
                    header: "Date Sent",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography fontWeight={500}>{row.dateSent}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.6 }}>
                                {row.time}
                            </Typography>
                        </Box>
                    ),
                },
            ];
        } else if (type === "draft") {
            return [
                {
                    header: "User Id",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar src={row.userAvatar} sx={{ width: 28, height: 28 }} />
                            <Typography fontWeight={500}>{row.userId}</Typography>
                        </Box>
                    ),
                },
                {
                    header: "Email Address",
                    render: (row) => <Typography fontWeight={500}>{row.email}</Typography>,
                },
                {
                    header: "Message Content",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography variant="body2">{row.message}</Typography>
                        </Box>
                    ),
                },
                {
                    header: "Date Saved",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography fontWeight={500}>{row.dateSaved}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.6 }}>
                                {row.time}
                            </Typography>
                        </Box>
                    ),
                },
                {
                    header: "Days in draft",
                    render: (row) => <Typography fontWeight={600}>{row.daysInDraft}</Typography>,
                },
            ];
        } else {
            // Inbox Columns
            return [
                {
                    header: "Status",
                    render: (row) => {
                        const styles = getStatusStyles(row.status);
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    bgcolor: styles.bg,
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: 2,
                                    width: "fit-content",
                                }}
                            >
                                <Box sx={{ width: 8, height: 8, bgcolor: styles.dot, borderRadius: "50%" }} />
                                <Typography variant="body2" sx={{ color: styles.text }}>
                                    {styles.label}
                                </Typography>
                            </Box>
                        );
                    },
                },
                {
                    header: "User Id",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar src={row.userAvatar} sx={{ width: 28, height: 28 }} />
                            <Typography fontWeight={500}>{row.userId}</Typography>
                        </Box>
                    ),
                },
                {
                    header: "Email Address",
                    render: (row) => <Typography fontWeight={500}>{row.email}</Typography>,
                },
                {
                    header: "Message Content",
                    render: (row) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography variant="body2">{row.message}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.6 }}>
                                {row.time}
                            </Typography>
                        </Box>
                    ),
                },
                {
                    header: "Date",
                    render: (row) => <Typography fontWeight={500}>{row.date}</Typography>,
                },
            ];
        }
    };

    return <CommonTable columns={getColumns()} rows={rows} />;
}
