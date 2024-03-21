import React from "react";
import { RadioProps } from "../Radio/Radio";

import styles from "./Checkbox.module.css";

export function Checkbox({ id, label, checked, onChange }: RadioProps) {
    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                name={id}
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id} className={styles.checkboxLabel}>
                {label}
            </label>
        </div>
    );
}
