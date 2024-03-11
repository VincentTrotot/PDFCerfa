import React from "react";
import { InputProps } from "./Input";

type SelectInputProps = {
    options: string[];
} & InputProps;
export function SelectInput({ id, name, label, options }: SelectInputProps) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                Couleur des yeux
            </label>
            <select className="form-select" name={name} id={id}>
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}
