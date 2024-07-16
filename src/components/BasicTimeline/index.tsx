import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { formatCurrency } from "../../utils";

import styles from "./index.module.css";
import { usePaymentContext } from "../../hooks/usePaymentContext";

interface BasicTimelineProps {
    numberOfInstallments: number;
    stage?: string;
}

// Aprendi a utilizar MUI aqui, deveria ter usado em todo o projeto
export const BasicTimeline = ({
    numberOfInstallments,
    stage,
}: BasicTimelineProps) => {
    const { pixPaymentValue, totalAmount } = usePaymentContext();

    const remainingValue = totalAmount - pixPaymentValue;

    return (
        <Timeline
            className={styles.container}
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
                margin: "1rem 0",
                padding: "0",
            }}
        >
            <TimelineItem
                sx={{
                    minHeight: "3rem",
                }}
            >
                <TimelineSeparator sx={{ fontSize: "medium" }}>
                    {stage === "creditMethod" ? (
                        <CheckCircleIcon
                            sx={{
                                fontSize: "1.1rem",
                                color: "#03D69D",
                            }}
                        />
                    ) : (
                        <TimelineDot
                            variant="outlined"
                            className={styles.customDot}
                            sx={{
                                borderColor: "#03D69D",
                                width: "0.2rem",
                                height: "0.2rem",
                            }}
                        />
                    )}
                    {numberOfInstallments > 1 && (
                        <TimelineConnector
                            sx={{
                                backgroundColor: "#E5E5E5",
                            }}
                        />
                    )}
                </TimelineSeparator>
                <TimelineContent className={styles.timelineContent}>
                    <div className={styles.timelineContentColumn}>
                        {numberOfInstallments === 1
                            ? "À vista no Pix"
                            : "1ª entrada no Pix"}
                    </div>
                    <div
                        className={`${styles.timelineContentColumn} ${styles.secondColumn}`}
                    >
                        {formatCurrency(pixPaymentValue)}
                    </div>
                </TimelineContent>
            </TimelineItem>
            {numberOfInstallments > 1 && (
                <TimelineItem
                    sx={{
                        minHeight: "1rem",
                        height: "1rem",
                    }}
                >
                    <TimelineSeparator sx={{ fontSize: "medium" }}>
                        <TimelineDot
                            variant="outlined"
                            className={styles.customDot}
                            sx={{
                                width: "0.2rem",
                                height: "0.2rem",
                                borderColor:
                                    stage === "creditMethod"
                                        ? "#03D69D"
                                        : "#E5E5E5",
                            }}
                        />
                    </TimelineSeparator>
                    <TimelineContent className={styles.timelineContent}>
                        <div className={styles.timelineContentColumn}>
                            Parcelas no cartão
                        </div>
                        <div
                            className={`${styles.timelineContentColumn} ${styles.secondColumn}`}
                        >
                            {numberOfInstallments - 1}x{" "}
                            {formatCurrency(
                                remainingValue / (numberOfInstallments - 1)
                            )}
                        </div>
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    );
};
