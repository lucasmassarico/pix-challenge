import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { addDays, formatDate } from "../../utils";

export const PaymentDeadline = () => {
    const [paymentDeadline, setPaymentDeadline] = useState("");

    useEffect(() => {
        const currentDate = new Date();
        const deadlineDate = addDays(currentDate, 7);
        setPaymentDeadline(formatDate(deadlineDate));
    }, []);

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);

    return (
        <div className={styles.paymentDeadline}>
            <p>Prazo de pagamento:</p>
            <span>{paymentDeadline}</span>
        </div>
    );
};
