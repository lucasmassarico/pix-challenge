import { StartMessage } from "../StartMessage";
import { usePaymentContext } from "../../hooks/usePaymentContext";

import styles from "./index.module.css";

import { ThumbUpAlt } from "@mui/icons-material";
import { useEffect } from "react";

interface DoneProps {
    selectPaymentMethod: (newStage: string) => void;
}

export const Done = ({ selectPaymentMethod }: DoneProps) => {
    const {
        setNumberOfInstallments,
        setPaymentValue,
        setPixPaymentValue,
        setTotalAmount,
    } = usePaymentContext();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setNumberOfInstallments(0);
            setPaymentValue(0);
            setPixPaymentValue(0);
            setTotalAmount(0);

            selectPaymentMethod("paymentMethod");
        }, 5000);

        return () => clearTimeout(timeout);
    }, [
        setNumberOfInstallments,
        setPaymentValue,
        setPixPaymentValue,
        setTotalAmount,
        selectPaymentMethod,
    ]);

    return (
        <>
            <div className={styles.container}>
                <ThumbUpAlt sx={{ fontSize: "9rem", color: "#03D69D" }} />

                <StartMessage message="Obrigado pela compra!" />
            </div>
        </>
    );
};
