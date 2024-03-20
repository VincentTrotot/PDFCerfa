import React, { HTMLAttributes } from "react";
import styles from "./Fieldset.module.css";
import clsx from "clsx";

type FieldsetProps = {
    legend?: string;
} & HTMLAttributes<HTMLFieldSetElement>;

export function Fieldset({ legend, className, ...props }: FieldsetProps) {
    return (
        <fieldset className={clsx(styles.fieldset, className)}>
            {legend && <legend>{legend}</legend>}
            {props.children}
        </fieldset>
    );
}
