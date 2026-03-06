import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";

function StatsCard({
    title,
    amount,
    change,
    unit,
    dotColor = "#3b82f6",
}) {
    const numericChange =
        typeof change === "string"
            ? parseFloat(change.replace(/[^0-9.-]/g, ""))
            : change;

    const isPositive = numericChange > 0;
    const isNegative = numericChange < 0;

    const displayAmount = React.useMemo(() => {
        if (typeof amount === "string") {
            if (amount.includes(",")) return amount;
            const num = parseFloat(amount.replace(/[^0-9.-]/g, ""));
            return isNaN(num) ? amount : num.toLocaleString();
        }
        return Number(amount || 0).toLocaleString();
    }, [amount]);

    return (
        <Paper
            elevation={0}
            sx={{
                flex: 1,
                width: {
                    xs: '80vw',
                    sm: '18vw',
                    md: '15vw',
                },
                height: {xs: "auto", sm: "auto", md: "auto"},
                p: { xs: 2, sm: 2.5 },
                borderRadius: 2,
                border: "1px solid #f3f4f6",
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "flex-start" },
                gap: 2,
                alignItems: "stretch",
                backgroundColor: "#ffffff",
                border: "1px solid #CACACA",
            }}
        >
            {/* Top Row */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "10%",
                            backgroundColor: dotColor,
                        }}
                    />

                    <Typography
                        sx={{
                            fontWeight: 500,
                            color: "#9CA3AF",
                            fontSize: "0.875rem",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontWeight: 600,
                        color: isPositive
                            ? "#22c55e"
                            : isNegative
                                ? "#ef4444"
                                : "#9ca3af",
                        fontSize: "0.75rem",
                    }}
                >
                    {isPositive ? "+" : ""}
                    {numericChange || 0}%
                </Typography>
            </Box>

            {/* Amount */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1.5,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        color: "#111827",
                        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    }}
                >
                    {displayAmount}
                </Typography>

                <Typography
                    sx={{
                        color: "#9ca3af",
                        fontWeight: 400,
                        fontSize: "0.875rem",
                    }}
                >
                    {unit}
                </Typography>
            </Box>
        </Paper>
    );
}

export default StatsCard;