import { useContext } from "react";
import { PaymentContext, PaymentContextType } from "../context/PaymentContext";

export const usePaymentContext = (): PaymentContextType => {
    const context = useContext(PaymentContext);

    if (!context) {
        throw new Error(
            "usePaymentContext must be used within a PaymentContextProvider"
        );
    }

    return context;
};
