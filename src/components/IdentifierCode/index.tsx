import styles from "./index.module.css";

export const IdentifierCode = () => {
    return (
        <div className={styles.container}>
            <p>
                <span className={styles.message}>Identificador:</span>
            </p>
            <p>
                <span className={styles.idMessage}>2c1b951f356c4680b13ba1c9fc889c47</span>
            </p>
        </div>
    );
};
