import React from "react";
import { InputProps } from "../Input/Input";
import styles from "../Input/Input.module.css";

type SelectInputProps = {
    options: string[];
} & InputProps;
export function SelectInput({ id, name, label, options }: SelectInputProps) {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <select name={name} id={id}>
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}
