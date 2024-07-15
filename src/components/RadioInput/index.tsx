import { ReactNode } from "react";

// styles
import styles from "./index.module.css";

import SelectedSVG from "../../assets/selected.svg";
import NotSelectedSVG from "../../assets/not_selected.svg";

import { formatCurrency } from "../../utils";

interface RadioInputProps {
    name: string;
    value: string;
    numberOfInstallments: number;
    paymentValue: number;
    cashbackPercentage?: ReactNode;
    specialLineText?: ReactNode;
    totalValue?: number;
    checked: boolean;
    onChange: (value: string) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({
    name,
    value,
    numberOfInstallments,
    paymentValue,
    cashbackPercentage,
    specialLineText,
    totalValue,
    checked,
    onChange,
}) => {
    return (
        <label
            className={`${styles.inputMethod} ${checked ? styles.checked : ""}`}
        >
            <input
                type="radio"
                name={name}
                value={value}
                onChange={() => onChange(value)}
                className={styles.radioInput}
            />
            <div className={styles.inputContent}>
                {paymentValue && (
                    <div className={styles.paymentValue}>
                        <span>
                            <strong>{numberOfInstallments}x</strong>{" "}
                            {formatCurrency(paymentValue)}
                        </span>
                    </div>
                )}
                {totalValue && (
                    <div className={styles.totalValue}>
                        Total: {formatCurrency(totalValue)}
                    </div>
                )}
                {cashbackPercentage && (
                    <div className={styles.cashback}>
                        <span>
                            Ganhe <strong>{cashbackPercentage}%</strong> de
                            Cashback
                        </span>
                    </div>
                )}
                {specialLineText && (
                    <div className={styles.specialLine}>{specialLineText}</div>
                )}

                <div className={styles.customRadio}>
                    <img
                        src={checked ? SelectedSVG : NotSelectedSVG}
                        alt="Radio"
                        className={styles.customRadio}
                    />
                </div>
            </div>
        </label>
    );
};
