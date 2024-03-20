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
        <div className="form-check">
            <label className="form-check-label" htmlFor={id}>
                <input
                    className="form-check-input"
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
                {label}
            </label>
        </div>
    );
}
