import { useState } from "react";

// styles
import styles from "./index.module.css";

import { RadioInput } from "../RadioInput";
import { RadioGroup } from "../RadioGroup";
import { StartMessage } from "../StartMessage";

import { usePaymentContext } from "../../hooks/usePaymentContext";

interface PaymentMethodsProps {
    selectPaymentMethod: (newStage: string) => void;
}

export const PaymentMethods = ({
    selectPaymentMethod,
}: PaymentMethodsProps) => {
    const [selectedPayment, setSelectedPayment] = useState("");

    const {
        userName,
        setPaymentValue,
        setNumberOfInstallments,
        setTotalAmount,
    } = usePaymentContext();

    const handlePaymentMethodChange = (
        paymentInput: string,
        paymentValueInput: number,
        numberOfInstallmentsInput: number
    ) => {
        setSelectedPayment(paymentInput);
        setNumberOfInstallments(numberOfInstallmentsInput);
        setPaymentValue(paymentValueInput);
        setTotalAmount(paymentValueInput);
        selectPaymentMethod("pixMethod");
    };

    return (
        <div className={styles.container}>
            <StartMessage message={`${userName}, como você quer pagar?`} />

            <RadioGroup contentBefore="Pix">
                <RadioInput
                    name="paymentMethod"
                    value="pix1"
                    numberOfInstallments={1}
                    paymentValue={30500}
                    cashbackPercentage={3}
                    specialLineText={
                        <span>
                            <strong>🤑 R$ 300,00</strong> de volta no seu Pix na
                            hora
                        </span>
                    }
                    checked={selectedPayment === "pix1"}
                    onChange={() => handlePaymentMethodChange("pix1", 30500, 1)}
                ></RadioInput>
            </RadioGroup>

            <RadioGroup contentBefore="Pix Parcelado">
                <RadioInput
                    name="paymentMethod"
                    value="pixcredit1"
                    numberOfInstallments={2}
                    paymentValue={15300}
                    totalValue={30600.0}
                    checked={selectedPayment === "pixcredit1"}
                    onChange={() =>
                        handlePaymentMethodChange("pixcredit1", 30600, 2)
                    }
                ></RadioInput>
                <RadioInput
                    name="paymentMethod"
                    value="pixcredit2"
                    numberOfInstallments={3}
                    paymentValue={10206.66}
                    totalValue={30620.0}
                    checked={selectedPayment === "pixcredit2"}
                    onChange={() =>
                        handlePaymentMethodChange("pixcredit2", 30620, 3)
                    }
                ></RadioInput>
                <RadioInput
                    name="paymentMethod"
                    value="pixcredit3"
                    numberOfInstallments={4}
                    paymentValue={7725.0}
                    totalValue={30900.0}
                    checked={selectedPayment === "pixcredit3"}
                    onChange={() =>
                        handlePaymentMethodChange("pixcredit3", 30900, 4)
                    }
                    specialLineText={
                        <span>
                            <strong>-3% de juros:</strong> Melhor opção de
                            parcelamento
                        </span>
                    }
                ></RadioInput>
                <RadioInput
                    name="paymentMethod"
                    value="pixcredit4"
                    numberOfInstallments={5}
                    paymentValue={6300.0}
                    totalValue={31500.0}
                    checked={selectedPayment === "pixcredit4"}
                    onChange={() =>
                        handlePaymentMethodChange("pixcredit4", 31500, 5)
                    }
                ></RadioInput>
                <RadioInput
                    name="paymentMethod"
                    value="pixcredit5"
                    numberOfInstallments={6}
                    paymentValue={5283.33}
                    totalValue={31699.98}
                    checked={selectedPayment === "pixcredit5"}
                    onChange={() =>
                        handlePaymentMethodChange("pixcredit5", 31699.98, 6)
                    }
                ></RadioInput>
                <RadioInput
                    name="paymentMethod"
                    value="pixcredit6"
                    numberOfInstallments={7}
                    paymentValue={4542.85}
                    totalValue={31800.0}
                    checked={selectedPayment === "pixcredit6"}
                    onChange={() =>
                        handlePaymentMethodChange("pixcredit6", 31800, 7)
                    }
                ></RadioInput>
            </RadioGroup>
        </div>
    );
};
