import SecurityGuard from "./../../assets/guard_security.svg";
import wooviLogo from "./../../assets/logo.svg";

import styles from "./index.module.css";

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <img src={SecurityGuard} alt="Shield" />
            <p>Pagamento 100% seguro via:</p>
            <img src={wooviLogo} alt="wooviLogo" />
        </div>
    );
};
