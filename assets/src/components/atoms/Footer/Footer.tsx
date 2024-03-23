import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {}

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                Avec ♥ par{" "}
                <a
                    className={styles.footerLink}
                    href="https://github.com/VincentTrotot/"
                >
                    Vincent Trotot
                </a>
            </div>
        </footer>
    );
}
