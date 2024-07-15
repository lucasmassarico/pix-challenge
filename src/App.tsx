import { useCallback, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { PaymentMethods } from "./components/PaymentMethods";

import { motion } from "framer-motion";

import wooviLogo from "./assets/logo.svg";

import { usePaymentContext } from "./hooks/usePaymentContext";
import { PixPayment } from "./components/PixPayment";
import { CreditPayment } from "./components/CreditPayment";
import { Done } from "./components/Done";

function App() {
    const stages = [
        { id: 1, name: "paymentMethod" }, // index
        { id: 2, name: "pixMethod" },
        { id: 3, name: "creditMethod" },
        { id: 4, name: "done" },
    ];

    const { setUserName } = usePaymentContext();

    setUserName("Lucas");

    const [stagePayment, setStagePayment] = useState(stages[0].name);

    const selectStage = useCallback(
        (newStage: string) => {
            setStagePayment(newStage);
        },
        [stages]
    );

    return (
        <>
            <div>
                <img src={wooviLogo} className="logo" alt="logo" />
            </div>
            {stagePayment === "paymentMethod" && (
                <>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <PaymentMethods selectPaymentMethod={selectStage} />
                    </motion.div>
                </>
            )}

            {stagePayment === "pixMethod" && (
                <>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <PixPayment selectPaymentMethod={selectStage} />
                    </motion.div>
                </>
            )}

            {stagePayment === "creditMethod" && (
                <>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <CreditPayment selectPaymentMethod={selectStage} />
                    </motion.div>
                </>
            )}

            {stagePayment === "done" && (
                <>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Done selectPaymentMethod={selectStage} />
                    </motion.div>
                </>
            )}

            <Footer />
        </>
    );
}

export default App;
