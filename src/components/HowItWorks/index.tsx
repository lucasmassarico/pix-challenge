import { CircleRounded, ExpandLess } from "@mui/icons-material";
import { Box, Collapse, ListItemIcon, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const HowItWorks = () => {
    const [expandedSession, setExpandedSession] = useState(false);

    function expandHowSession() {
        setExpandedSession((prevState) => !prevState);
    }

    return (
        <>
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                onClick={expandHowSession}
            >
                <Typography
                    sx={{
                        fontFamily: "Nunito",
                        fontWeight: "800",
                        fontSize: "1rem",
                        display: "inline-flex",
                        gap: "0.25rem",
                        color: "#4D4D4D",
                    }}
                >
                    Como funciona?
                </Typography>
                <ExpandLess
                    sx={{
                        fontSize: "1.5rem",
                        rotate: expandedSession ? "180deg" : "",
                    }}
                />
            </Box>

            <Collapse
                in={expandedSession}
                sx={{
                    width: "90%",
                }}
            >
                {expandedSession && (
                    <Stack>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1rem",
                                fontWeight: "800",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "start",
                                padding: "1rem 0.5rem",
                            }}
                        >
                            O pagamento funciona da seguinte forma:
                        </Typography>
                        <Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ListItemIcon sx={{ minWidth: "auto" }}>
                                    <CircleRounded
                                        sx={{
                                            fontSize: "0.5rem",
                                            color: "#4D4D4D",
                                        }}
                                    />
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "1rem",
                                        display: "flex",
                                    }}
                                >
                                    Pague o valor da entrada (ou total) no pix.
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ListItemIcon sx={{ minWidth: "auto" }}>
                                    <CircleRounded
                                        sx={{
                                            fontSize: "0.5rem",
                                            color: "#4D4D4D",
                                        }}
                                    />
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "1rem",
                                        display: "flex",
                                    }}
                                >
                                    Pague o restante com o seu cartão de crédito.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                )}
            </Collapse>
        </>
    );
};
