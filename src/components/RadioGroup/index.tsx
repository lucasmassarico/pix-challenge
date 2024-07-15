import { ReactNode } from "react";

//styles
import styles from "./index.module.css";

interface RadioGroupProps {
    children: ReactNode;
    contentBefore: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    children,
    contentBefore,
}) => {
    return (
        <div className={styles.content} data-before={contentBefore}>
            {children}
        </div>
    );
};
