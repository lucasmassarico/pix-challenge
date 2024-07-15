import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

export interface PaymentContextType {
    userName: string;
    setUserName: Dispatch<SetStateAction<string>>;

    paymentValue: number;
    setPaymentValue: Dispatch<SetStateAction<number>>;

    pixPaymentValue: number;
    setPixPaymentValue: Dispatch<SetStateAction<number>>;

    totalAmount: number;
    setTotalAmount: Dispatch<SetStateAction<number>>;

    numberOfInstallments: number;
    setNumberOfInstallments: Dispatch<SetStateAction<number>>;
}

export const PaymentContext = createContext<PaymentContextType | undefined>(
    undefined
);

interface PaymentContextProviderProps {
    children: ReactNode;
}

export const PaymentContextProvider = ({
    children,
}: PaymentContextProviderProps) => {
    const [paymentValue, setPaymentValue] = useState<number>(0);
    const [numberOfInstallments, setNumberOfInstallments] = useState<number>(0);
    const [userName, setUserName] = useState<string>("");
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [pixPaymentValue, setPixPaymentValue] = useState<number>(0);

    return (
        <PaymentContext.Provider
            value={{
                paymentValue,
                setPaymentValue,
                numberOfInstallments,
                setNumberOfInstallments,
                userName,
                setUserName,
                totalAmount,
                setTotalAmount,
                pixPaymentValue,
                setPixPaymentValue,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};
