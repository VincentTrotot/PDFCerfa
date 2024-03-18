import React, { HTMLAttributes } from "react";

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
