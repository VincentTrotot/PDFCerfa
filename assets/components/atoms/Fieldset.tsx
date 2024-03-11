import React, { HTMLAttributes } from "react";

type FieldsetProps = {
    legend?: string;
} & HTMLAttributes<HTMLFieldSetElement>;

export function Fieldset({ legend, ...props }: FieldsetProps) {
    return (
        <fieldset>
            {legend && <legend>{legend}</legend>}
            {props.children}
        </fieldset>
    );
}
