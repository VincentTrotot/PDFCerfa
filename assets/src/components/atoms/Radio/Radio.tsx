import React from "react";
import { InputProps } from "../Input/Input";
import styles from "./Radio.module.css";

export type RadioProps = {
    onClickCallback?: (arg: any) => void;
    checked?: boolean;
} & InputProps;

export function Radio({
    id,
    label,
    name,
    value,
    defaultChecked = false,
    onChange,
    onClickCallback,
    checked,
}: RadioProps) {
    name = name ?? id.toString();

    return (
        <div className={styles.radio}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                defaultChecked={
                    checked == undefined ? defaultChecked : undefined
                }
                onChange={onChange}
                checked={checked}
                onClick={onClickCallback}
            />
            <label className={styles.radioLabel} htmlFor={id}>
                {label}
            </label>
        </div>
    );
}
