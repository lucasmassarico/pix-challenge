import styles from "./index.module.css";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { usePaymentContext } from "../../hooks/usePaymentContext";
import { StartMessage } from "../StartMessage";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChangeEvent, useState } from "react";
import {
    formatCardNumber,
    FormatCpf,
    formatCurrency,
    formatDateCard,
} from "../../utils";
import { Button } from "../Button";
import { BasicTimeline } from "../BasicTimeline";
import { CetTotalAmount } from "../CetTotalAmount";
import { Divider } from "@mui/material";
import { HowItWorks } from "../HowItWorks";
import { IdentifierCode } from "../IdentifierCode";
import { PaymentDeadline } from "../PaymentDeadline";

const creditCardPaymentSchema = z.object({
    fullName: z.string().min(2, "Nome muito curto"),
    cpf: z.string().min(14, "CPF é obrigatório"),
    cardNumber: z.string().min(19, "Número do cartão inválido"),
    expirationDate: z.string().min(7, "Data de vencimento é obrigatória"),
    cvv: z.string().min(3, "CVV inválido"),
    installment: z.number(),
});

type FormCreditCardPaymentForm = z.infer<typeof creditCardPaymentSchema>;

interface CreditPaymentProps {
    selectPaymentMethod: (newStage: string) => void;
}

export const CreditPayment = ({ selectPaymentMethod }: CreditPaymentProps) => {
    const {
        userName,
        numberOfInstallments,
        paymentValue,
        setNumberOfInstallments,
        totalAmount,
        pixPaymentValue,
    } = usePaymentContext();

    const [cpfForm, setCpfForm] = useState("");
    const [cardForm, setCardForm] = useState("");
    const [dateForm, setDateForm] = useState("");
    const [newInstallmentPayment, setNewInstallmentPayment] = useState(
        numberOfInstallments - 1
    );

    const remainingValue = totalAmount - pixPaymentValue;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormCreditCardPaymentForm>({
        resolver: zodResolver(creditCardPaymentSchema),
    });

    function handleCpfChange(e: ChangeEvent<HTMLInputElement>) {
        setCpfForm(FormatCpf(e.target.value));
    }

    function handleCardNumberChange(e: ChangeEvent<HTMLInputElement>) {
        setCardForm(formatCardNumber(e.target.value));
    }

    function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
        setDateForm(formatDateCard(e.target.value));
    }

    function handleNewInstallment(e: SelectChangeEvent<number>) {
        const newValue = Number(e.target.value);
        setNewInstallmentPayment(newValue);
        setNumberOfInstallments(newValue + 1);
    }

    function onSubmit(data: FormCreditCardPaymentForm) {
        console.log(data);

        selectPaymentMethod("done");
    }

    return (
        <>
            <StartMessage
                message={`${userName}, pague o restante em ${
                    numberOfInstallments - 1
                }x no cartão`}
            />

            <FormControl
                sx={{ width: "100%", gap: "1.75rem", maxWidth: "26.5rem" }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    {...register("fullName")}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                    label="Nome Completo"
                    variant="outlined"
                    InputProps={{
                        style: {
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#b2b2b2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#03D69D",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#03D69D",
                            },
                        },
                        "& .MuiOutlinedInput-input": {
                            color: "#4D4D4D",
                        },
                        "& .MuiInputLabel-root": {
                            color: "#b2b2b2",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#03D69D",
                        },
                    }}
                />

                <TextField
                    {...register("cpf")}
                    label="CPF"
                    onChange={handleCpfChange}
                    value={cpfForm}
                    inputProps={{ maxLength: 14 }}
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                    variant="outlined"
                    InputProps={{
                        style: {
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#b2b2b2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#03D69D",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#03D69D",
                            },
                        },
                        "& .MuiOutlinedInput-input": {
                            color: "#4D4D4D",
                        },
                        "& .MuiInputLabel-root": {
                            color: "#b2b2b2",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#03D69D",
                        },
                    }}
                />

                <TextField
                    {...register("cardNumber")}
                    label="Número do cartão"
                    onChange={handleCardNumberChange}
                    value={cardForm}
                    inputProps={{ maxLength: 19 }}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber?.message}
                    variant="outlined"
                    InputProps={{
                        style: {
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#b2b2b2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#03D69D",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#03D69D",
                            },
                        },
                        "& .MuiOutlinedInput-input": {
                            color: "#4D4D4D",
                        },
                        "& .MuiInputLabel-root": {
                            color: "#b2b2b2",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#03D69D",
                        },
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1.375rem",
                    }}
                >
                    <TextField
                        {...register("expirationDate")}
                        label="Vencimento"
                        onChange={handleDateChange}
                        value={dateForm}
                        error={!!errors.expirationDate}
                        helperText={errors.expirationDate?.message}
                        variant="outlined"
                        InputProps={{
                            style: {
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#b2b2b2",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#03D69D",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03D69D",
                                },
                            },
                            "& .MuiOutlinedInput-input": {
                                color: "#4D4D4D",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#b2b2b2",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#03D69D",
                            },
                        }}
                    />

                    <TextField
                        {...register("cvv")}
                        label="CVV"
                        inputProps={{ maxLength: 3 }}
                        error={!!errors.cvv}
                        helperText={errors.cvv?.message}
                        variant="outlined"
                        InputProps={{
                            style: {
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#b2b2b2",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#03D69D",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03D69D",
                                },
                            },
                            "& .MuiOutlinedInput-input": {
                                color: "#4D4D4D",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#b2b2b2",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#03D69D",
                            },
                        }}
                    />
                </Box>

                <FormControl
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#b2b2b2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#03D69D",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#03D69D",
                            },
                        },
                        "& .MuiOutlinedInput-input": {
                            color: "#4D4D4D",
                        },
                        "& .MuiInputLabel-root": {
                            color: "#b2b2b2",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#03D69D",
                        },
                    }}
                >
                    <InputLabel
                        id="installment"
                        sx={{
                            fontFamily: "Nunito",
                            fontSize: "1.125rem",
                        }}
                    >
                        Parcelas
                    </InputLabel>

                    <Select
                        {...register("installment")}
                        value={newInstallmentPayment}
                        id="installment"
                        label="Parcelas"
                        error={!!errors.installment}
                        onChange={handleNewInstallment}
                        sx={{
                            fontFamily: "Nunito",
                            textAlign: "left",
                            fontSize: "1.125rem",
                            fontWeight: "600",
                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    textAlign: "left",
                                    fontSize: "1.125rem",
                                },
                            },
                        }}
                    >
                        <MenuItem
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            }}
                            key={1}
                            value={1}
                        >
                            1x de {formatCurrency(remainingValue / 1)}
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            }}
                            key={2}
                            value={2}
                        >
                            2x de {formatCurrency(remainingValue / 2)}
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            }}
                            key={3}
                            value={3}
                        >
                            3x de {formatCurrency(remainingValue / 3)}
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            }}
                            key={4}
                            value={4}
                        >
                            4x de {formatCurrency(remainingValue / 4)}
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            }}
                            key={5}
                            value={5}
                        >
                            5x de {formatCurrency(remainingValue / 5)}
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                            }}
                            key={6}
                            value={6}
                        >
                            6x de {formatCurrency(remainingValue / 6)}
                        </MenuItem>
                    </Select>
                </FormControl>
                <Button>Pagar</Button>
            </FormControl>

            <PaymentDeadline />

            <div className={styles.container}>
                <BasicTimeline
                    numberOfInstallments={numberOfInstallments}
                />

                <Divider
                    sx={{ my: "1.25rem", width: "90%", margin: "1rem 0" }}
                />

                <CetTotalAmount paymentValue={paymentValue} />

                <Divider
                    sx={{ my: "1.25rem", width: "90%", margin: "1rem 0" }}
                />

                <HowItWorks />

                <Divider
                    sx={{ my: "1.25rem", width: "90%", margin: "1rem 0" }}
                />

                <IdentifierCode />
            </div>
        </>
    );
};
