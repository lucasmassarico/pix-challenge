import { ReactNode } from "react";
import styles from "./index.module.css";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className={styles.Button} onClick={onClick}>
            {children}
        </button>
    );
};
