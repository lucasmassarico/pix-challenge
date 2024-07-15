import styles from "./index.module.css";

interface StartMessageProps {
    message: string;
}

export const StartMessage = ({ message }: StartMessageProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.userNameContainer}>
                <p className={styles.userNameIntro}>{message}</p>
            </div>
        </div>
    );
};
