import React from "react";
import { RadioProps } from "../Radio/Radio";

import styles from "./Checkbox.module.css";

export function Checkbox({ id, label, checked, onChange }: RadioProps) {
    return (
        <div className="mb-3 form-check">
            <label htmlFor={id} className="form-check-label">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={id}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
}
