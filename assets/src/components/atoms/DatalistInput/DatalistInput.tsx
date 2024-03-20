import React from "react";
import { InputProps } from "../Input/Input";
import styles from "../Input/Input.module.css";

export function DatalistInput({ id, label, datalist }: InputProps) {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                list={datalist?.listName}
                autoComplete="off"
            />
            <datalist id={datalist?.listName}>
                {datalist?.listItems.map((d) => (
                    <option key={d.id} value={d.id}>
                        {d.texte}
                    </option>
                ))}
            </datalist>
        </div>
    );
}
