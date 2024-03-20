import React, { HTMLAttributes } from "react";
import styles from "./Fieldset.module.css";

type FieldsetProps = {
    legend?: string;
} & HTMLAttributes<HTMLFieldSetElement>;

export function Fieldset({ legend, className, ...props }: FieldsetProps) {
    return (
        <fieldset className={className}>
            {legend && <legend>{legend}</legend>}
            {props.children}
        </fieldset>
    );
}
