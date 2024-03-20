import React from "react";
import { HTMLAttributes } from "react";
import styles from "./Input.module.css";

export type InputProps = {
    id: string | number;
    name?: string;
    label?: string;
    type?: string;
    value?: string | number;
    datalist?: {
        listName: string;
        listItems: {
            id: number | string;
            texte: string;
        }[];
    };
} & HTMLAttributes<HTMLInputElement>;

export function Input({
    id,
    label,
    type = "text",
    name,
    onChange,
}: InputProps) {
    name = name ?? id.toString();
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form-control"
                type={type}
                id={id}
                name={name}
                onChange={onChange}
            />
        </div>
    );
}
