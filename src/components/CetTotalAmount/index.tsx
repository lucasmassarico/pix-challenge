import { Box, Typography } from "@mui/material";
import { formatCurrency } from "../../utils";

interface CetTotalAmountProps {
    paymentValue: number;
}

export const CetTotalAmount = ({ paymentValue }: CetTotalAmountProps) => {
    return (
        <Box
            sx={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Nunito !important",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    display: "inline-flex",
                    gap: "0.25rem",
                    color: "#4D4D4D",
                }}
            >
                CET: 0,5%
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Nunito !important",
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#4D4D4D",
                }}
            >
                Total: {formatCurrency(paymentValue)}
            </Typography>
        </Box>
    );
};
