import React from "react";
import { InputProps } from "../Input/Input";
import styles from "./DatalistInput.module.css";

export function DatalistInput({ id, label, datalist }: InputProps) {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form-control"
                type="text"
                id={id}
                name={id}
                list={datalist?.listName}
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
