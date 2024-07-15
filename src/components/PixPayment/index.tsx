import styles from "./index.module.css";
import fileCopy from "../../assets/file.svg";
// import selectedInstallment from "../../assets/selected_Installment.svg";

import { Divider } from "@mui/material";

import QRCode from "react-qr-code";

import { usePaymentContext } from "../../hooks/usePaymentContext";
import { formatCurrency } from "../../utils";
import { Button } from "../Button";
import { useState } from "react";
import { BasicTimeline } from "../BasicTimeline";
import { CetTotalAmount } from "../CetTotalAmount";
import { HowItWorks } from "../HowItWorks";
import { IdentifierCode } from "../IdentifierCode";
import { StartMessage } from "../StartMessage";
import { PaymentDeadline } from "../PaymentDeadline";

interface PixPaymentProps {
    selectPaymentMethod: (newStage: string) => void;
}

export const PixPayment = ({ selectPaymentMethod }: PixPaymentProps) => {
    const {
        userName,
        numberOfInstallments,
        paymentValue,
        totalAmount,
        setPixPaymentValue,
    } = usePaymentContext();

    const installmentValue = paymentValue;
    const totalAmountValue = totalAmount;
    setPixPaymentValue(totalAmount / numberOfInstallments);
    const [notification, setNotification] = useState<string | null>(null);

    const qrCodeValue =
        "00020101021226880014br.gov.bcb.pix2566qrcodes-pix.gerencianet.com.br/v2/0849218f535f4b09937d5b4585c8326f52040000530398654040.015802BR5909Admin Pix6009Sao Paulo6229052577532fc489a14bac9440e99f86304E6BB";

    const handleCopyQrCode = () => {
        navigator.clipboard.writeText(qrCodeValue).then(
            () => {
                setNotification(
                    "QR code copiado para a área de transferência!"
                );
                setTimeout(() => {
                    setNotification(null);
                }, 3000);
            },
            (err) => {
                console.error("Erro ao copiar o QR code: ", err);
                setNotification("Erro ao copiar o QR code.");
                setTimeout(() => {
                    setNotification(null);
                }, 3000);
            }
        );

        if (numberOfInstallments === 1) {
            selectPaymentMethod("done");
        } else {
            selectPaymentMethod("creditMethod");
        }
    };

    return (
        <div className={styles.container}>
            <StartMessage
                message={`${userName}, pague a entrada de ${formatCurrency(
                    installmentValue / numberOfInstallments
                )} pelo Pix`}
            />

            <div className={styles.qrCodeContainer}>
                <QRCode
                    className={styles.qrCode}
                    size={336}
                    value={qrCodeValue}
                />
            </div>

            <div className={styles.qrCodeButton}>
                <Button onClick={handleCopyQrCode}>
                    Clique para copiar QR CODE <img src={fileCopy} alt="copy" />
                </Button>

                {notification && (
                    <div className={styles.notification}>
                        <p>{notification}</p>
                    </div>
                )}
            </div>
            <PaymentDeadline />

            <BasicTimeline numberOfInstallments={numberOfInstallments} />

            <Divider sx={{ my: "1.25rem", width: "90%", margin: "1rem 0" }} />

            <CetTotalAmount paymentValue={totalAmountValue} />

            <Divider sx={{ my: "1.25rem", width: "90%", margin: "1rem 0" }} />

            <HowItWorks />

            <Divider sx={{ my: "1.25rem", width: "90%", margin: "1rem 0" }} />

            <IdentifierCode />
        </div>
    );
};
